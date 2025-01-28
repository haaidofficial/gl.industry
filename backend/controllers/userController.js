const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const {isAdmin} = require('../middleware/authMiddleware')

dotenv.config();

// Admin Login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password)

  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role,username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
};



// Create New User (Admin only)
exports.createAdmin = async (req, res) => {
  const { username, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, role });

  await user.save();
  res.status(201).json({ message: 'User created successfully' });
};

exports.createUser = [
  isAdmin, // Ensure the user is an admin
  async (req, res) => {
    try {
      const { username, password, role } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = new User({ username, password: hashedPassword, role });
      await user.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  },
];


exports.getUser = async (req, res) => {
  try {
    const user = await User.find().select('-password');;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

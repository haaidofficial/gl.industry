const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const adminSignupRoutes = require('./routes/adminSignupRoutes')
const contactRouter = require('./routes/contactRoutes')
const sliderRoutes = require("./routes/sliderImageRouter");
const path = require('path');
var cors = require('cors')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors())


// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/', adminSignupRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', userRoutes);
app.use('/api/contact', contactRouter)
app.use("/api", sliderRoutes);

app.get("/servertest",(req,res)=>{
    res.send("server running")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

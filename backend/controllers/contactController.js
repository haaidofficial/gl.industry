const Contact = require('../models/contactModel')


exports.createContactDetails = async (req, res) => {
    try {
        const { name, email, message, mobile } = req.body;
        const contact = new Contact({ name, email, message, mobile });
        await contact.save();
        res.status(200).json({ message: "Message sent successfully." });
    } catch (error) {
        res.status(500).json({ error: "Failed to save message." });
    }
};

exports.getAllEnquery = async (req, res) => {
    try {
        const contacts = await Contact.find(); // Fetch all inquiries from the database
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch inquiries." });
    }
};

exports.deleteEnquery = async (req, res) => {
    console.log(req.params.id)
    try {
      const deletedEnquery = await Contact.findByIdAndDelete(req.params.id);
      if (!deletedEnquery) return res.status(404).json({ message: 'Enquery not found' });
  
      res.json({ message: 'Enquery deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting enquery', error });
    }
  };
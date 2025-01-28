const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    message: String,
});


module.exports = mongoose.model('Contact', contactSchema);
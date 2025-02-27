const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    message: String,
},{ timestamps: true });


module.exports = mongoose.model('Contact', contactSchema);
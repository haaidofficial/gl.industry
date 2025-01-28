const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
  image: { type: String }, // Image file name
  status: { type: Boolean, default: true }, // Default to true (Active)
  slug: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

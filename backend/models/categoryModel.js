const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  status: { type: Boolean, default: true },
}, { timestamps: true });

categorySchema.pre('remove', async function (next) {
  const product = await this.model('Product').findOne({ category: this._id });
  if (product) {
    const error = new Error('Category cannot be deleted. Products are associated with this category.');
    next(error);
  } else {
    next();
  }
});

module.exports = mongoose.model('Category', categorySchema);

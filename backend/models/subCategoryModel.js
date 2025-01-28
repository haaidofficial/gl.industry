const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String },
  status: { type: Boolean, default: true },
}, { timestamps: true });

subCategorySchema.pre('remove', async function (next) {
  const product = await this.model('Product').findOne({ subCategory: this._id });
  if (product) {
    const error = new Error('Subcategory cannot be deleted. Products are associated with this subcategory.');
    next(error);
  } else {
    next();
  }
});

module.exports = mongoose.model('SubCategory', subCategorySchema);

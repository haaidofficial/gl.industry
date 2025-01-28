const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const Subcategory = require('../models/subCategoryModel');

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const { name, description, status } = req.body;

    // Check if the category already exists
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const newCategory = new Category({
      name,
      description,
      status: status || true
    });
    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully', newCategory });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
};

// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    category.name = req.body.name || category.name;
    category.description = req.body.description || category.description;
    await category.save();
    res.status(200).json({ message: 'Category updated successfully', category });
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Find the category
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Check if the category has subcategories
    const subcategories = await Subcategory.find({ parentCategory: categoryId });
    if (subcategories.length > 0) {
      return res.status(400).json({ error: 'Category has subcategories, cannot delete' });
    }

    // Delete the category
    await category.deleteOne();
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error'
    });
  }
}
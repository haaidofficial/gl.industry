const Category = require('../models/categoryModel');
const Product = require('../models/productModel')
// const slugify = require('../utils/slugify');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, subCategory, image, status, slug, category } = req.body;
    const productImage = req.file ? req.file.filename : null; // Image file name

    const newProduct = new Product(
      {
        name,
        description,
        category,
        subCategory,
        image: productImage,
        status,
        slug
      }
    );
    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product!', error });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('subCategory').populate('category')
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};




// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('subCategory').populate('category');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, subCategory, slug, status, category } = req.body;
    const updatedFields = { name, description, subCategory, slug, status, category };

    // Handle new image upload
    if (req.file) {
      updatedFields.image = req.file.filename;
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product.' });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};


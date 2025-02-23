const SubCategory = require('../models/subCategoryModel');
const Product = require('../models/productModel');
const fs = require('fs');
const path = require('path');
// Create SubCategoryD
// exports.createSubCategory = async (req, res) => {
//   try {
//     const { name, parentCategory, description, status } = req.body;

//     // Log request body to debug input values
//     console.log(name, parentCategory, description, status);

//     // Check if a subcategory with the same name exists under the same parent category
//     const existingSubCategory = await SubCategory.findOne({ name, parentCategory });
//     if (existingSubCategory) {
//       return res.status(400).json({ message: 'Subcategory already exists in this category' });
//     }

//     // Create a new subcategory with provided details
//     const newSubCategory = new SubCategory({
//       name,
//       parentCategory,
//       description,
//       status: status !== undefined ? status : true  // Default to true if status is undefined
//     });

//     // Save the new subcategory to the database
//     await newSubCategory.save();

//     res.status(201).json({ message: 'SubCategory created successfully', subCategory: newSubCategory });
//   } catch (error) {
//     console.error('Error creating subcategory:', error); // Log error for easier debugging
//     res.status(500).json({ message: 'Error creating subcategory', error });
//   }
// };

// Update SubCategory
// exports.updateSubCategory = async (req, res) => {
//   try {
//     const subCategory = await SubCategory.findById(req.params.id);
//     if (!subCategory) {
//       return res.status(404).json({ message: 'Subcategory not found' });
//     }
//     subCategory.name = req.body.name || subCategory.name;
//     subCategory.description = req.body.description || subCategory.description;
//     await subCategory.save();
//     res.status(200).json({ message: 'Subcategory updated successfully', subCategory });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating subcategory', error });
//   }
// };



// Create SubCategory with Image Upload
exports.createSubCategory = async (req, res) => {
  try {
    const { name, parentCategory, description, status } = req.body;
    const image = req.file ? req.file.filename : null; // Handle image upload
    // console.log(image)

    // Check if the subcategory already exists
    const existingSubCategory = await SubCategory.findOne({ name, parentCategory });
    if (existingSubCategory) {
      return res.status(400).json({ message: 'Subcategory already exists in this category' });
    }

    const newSubCategory = new SubCategory({
      name,
      parentCategory,
      description,
      status: status !== undefined ? status : true,
      image,
    });

    await newSubCategory.save();
    res.status(201).json({ message: 'SubCategory created successfully', subCategory: newSubCategory });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subcategory', error });
  }
};

// Update SubCategory with Image
// exports.updateSubCategory = async (req, res) => {
//   try {

//     const subCategory = await SubCategory.findById(req.params.id);
//     if (!subCategory) {
//       return res.status(404).json({ message: 'Subcategory not found' });
//     }
//     // console.log(subCategory)
//     // console.log(req.file)
//     if (req.body) {
//       // console.log("image:",subCategory.image)
//       // Remove old image if exists
//       if (subCategory.image) {
//         fs.unlinkSync(path.join(__dirname, '../uploads', subCategory.image));
//       }
//       subCategory.image = req.file.filename;
//     }

//     subCategory.name = req.body.name || subCategory.name;
//     subCategory.description = req.body.description || subCategory.description;
//     subCategory.status = req.body.status !== undefined ? req.body.status : subCategory.status;

//     await subCategory.save();
//     res.status(200).json({ message: 'Subcategory updated successfully', subCategory });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating subcategory', error });
//   }
// };


exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    // Check if products are associated with this subcategory
    const productExists = await Product.exists({ subCategory: req.params.id });

    // If products exist, only allow image update
    if (productExists) {
      if (req.file) {
        // Remove old image if exists
        if (subCategory.image) {
          fs.unlinkSync(path.join(__dirname, '../uploads', subCategory.image));
        }
        subCategory.image = req.file.filename;
      } else {
        return res.status(400).json({ message: 'Only image can be updated as products are associated with this subcategory' });
      }
    } else {
      // No products, update all fields
      if (req.file) {
        // Remove old image if exists
        if (subCategory.image) {
          fs.unlinkSync(path.join(__dirname, '../uploads', subCategory.image));
        }
        subCategory.image = req.file.filename;
      }

      subCategory.name = req.body.name || subCategory.name;
      subCategory.description = req.body.description || subCategory.description;
      subCategory.status = req.body.status !== undefined ? req.body.status : subCategory.status;
    }

    await subCategory.save();
    res.status(200).json({ message: 'Subcategory updated successfully', subCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating subcategory', error });
  }
};


// Get All SubCategories for a Category
exports.getSubCategory = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('parentCategory'); // Populates parent category details
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subcategories', error });
  }
};

exports.getSubCategoriesByCategory = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ parentCategory: req.params.categoryId });
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subcategories', error });
  }
};



// Delete SubCategory

exports.deleteSubCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Find the subcategory
    const subCategory = await SubCategory.findById(categoryId);
    if (!subCategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }

    // Check if products are associated with this subcategory
    const productExists = await Product.findOne({ subCategory: categoryId });
    if (productExists) {
      return res.status(400).json({ message: 'Subcategory cannot be deleted. Products are associated with this subcategory.' });
    }

    // Delete the subcategory
    await subCategory.deleteOne();
    res.json({ message: 'Subcategory deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Server Error'
    });
  }
};

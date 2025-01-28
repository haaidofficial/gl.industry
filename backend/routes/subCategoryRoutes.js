const express = require('express');
const { createSubCategory, getSubCategory, getSubCategoriesByCategory, updateSubCategory, deleteSubCategory } = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/', createSubCategory);
router.get('/', getSubCategory);
router.get('/:categoryId', getSubCategoriesByCategory);
router.put('/:id', updateSubCategory);  // Update subcategory
router.delete('/:id', deleteSubCategory);  // Delete subcategory

module.exports = router;

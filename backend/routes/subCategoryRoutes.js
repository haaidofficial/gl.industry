const express = require('express');
const { createSubCategory, getSubCategory, getSubCategoriesByCategory, updateSubCategory, deleteSubCategory } = require('../controllers/subCategoryController');
const upload = require('../utils/multerConfig'); // Multer middleware
const router = express.Router();

router.post('/', upload.single('image'), createSubCategory);
router.put('/:id', upload.single('image'), updateSubCategory);
router.get('/', getSubCategory);
router.get('/:categoryId', getSubCategoriesByCategory);
router.delete('/:id', deleteSubCategory);

module.exports = router;

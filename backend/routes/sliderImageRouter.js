const express = require('express');
const router = express.Router();
const sliderImageController = require('../controllers/sliderImageController')
const upload = require('../utils/multerConfig'); // Multer middleware

// Define routes
router.get("/slides", sliderImageController.getSlides);
router.post("/slides", upload.single("image"), sliderImageController.createSlide);
router.put("/slides/:id", upload.single("image"), sliderImageController.updateSlide);
router.delete("/slides/:id", sliderImageController.deleteSlide);

module.exports = router;
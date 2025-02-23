const SliderImage = require("../models/sliderImageModel");

// Get all slides (maximum 4 slides)
exports.getSlides = async (req, res) => {
  try {
    const slides = await SliderImage.find().limit(8);
    res.json(slides);
  } catch (error) {
    console.error("Error fetching slides:", error);
    res.status(500).json({ message: "Error fetching slides" });
  }
};

// Create a new slide (limit to 4 slides)
exports.createSlide = async (req, res) => {
  try {
    const slideCount = await SliderImage.countDocuments();
    if (slideCount >= 8) {
      return res
        .status(400)
        .json({ message: "You can only upload up to 4 slides." });
    }

    const { title, description } = req.body;
    const imageUrl = `${process.env.BACKEND_URL}/uploads/${req.file.filename}`;
    const slide = new SliderImage({ imageUrl, title, description });
    await slide.save();
    res.json(slide);
  } catch (error) {
    console.error("Error creating slide:", error);
    res.status(500).json({ message: "Error creating slide" });
  }
};

// Update a slide (update one or multiple fields, including image)
exports.updateSlide = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    // Find the slide
    const slide = await SliderImage.findById(id);
    if (!slide) {
      return res.status(404).json({ message: "Slide not found" });
    }

    // Update fields
    if (req.file) {
      slide.imageUrl = `${process.env.BACKEND_URL}/uploads/${req.file.filename}`;
    }
    if (title !== undefined) {
      slide.title = title;
    }
    if (description !== undefined) {
      slide.description = description;
    }

    // Save updated slide
    await slide.save();
    res.json(slide);
  } catch (error) {
    console.error("Error updating slide:", error);
    res.status(500).json({ message: "Error updating slide" });
  }
};

// Delete a slide
exports.deleteSlide = async (req, res) => {
  const { id } = req.params;

  try {
    await SliderImage.findByIdAndDelete(id);
    res.json({ message: "Slide deleted" });
  } catch (error) {
    console.error("Error deleting slide:", error);
    res.status(500).json({ message: "Error deleting slide" });
  }
};

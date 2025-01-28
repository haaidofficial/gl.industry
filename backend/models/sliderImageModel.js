const mongoose = require("mongoose");

const sliderImageSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
});

module.exports = mongoose.model("SliderImage", sliderImageSchema);

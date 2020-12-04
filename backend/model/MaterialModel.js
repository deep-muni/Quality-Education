const mongoose = require("mongoose");

const MaterialSchema = mongoose.Schema({
    subject: { type: String, required: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
});

module.exports = mongoose.model("study", MaterialSchema, "study");

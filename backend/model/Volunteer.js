const mongoose = require("mongoose");

const VolunteerSchema = mongoose.Schema({
    email: { type: String, required: true },
    fullName: { type: String, required: true },
});

module.exports = mongoose.model("volunteer", VolunteerSchema, "volunteer");

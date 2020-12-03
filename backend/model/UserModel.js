const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    userType: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String },
    subject: { type: String }
});

module.exports = mongoose.model("users", UserSchema, "users");

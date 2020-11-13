const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    password: { type: String, required: true },
    education: { type: String },
    profileType: { type: String },
    gender: { type: String },
    country: { type: String },
    address: { type: String },
    subject: { type: String }
});

module.exports = mongoose.model("users", UserSchema, "users");

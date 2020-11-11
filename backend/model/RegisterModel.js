const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //current level of education
    education: {
        type: String,
        required: true
    },
    //student or instructor
    type: {
        type: String,
        required: true
    }
}); module.exports = User = mongoose.model("users", UserSchema);
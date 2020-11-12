// Load User model
const User = require("../model/RegisterModel");
const bcrypt = require("bcryptjs");

const login = (req, res, next) => {
    console.log("login request");
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(400).json({ error: "Email is not registred." });
        }
        // Hash password before saving in database
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) return status(400).json("Incorrect Password");
            if (result) return res.status(200).json(user);
            return res.status(400).json("Incorrect Password");
        });
    });
}
module.exports.login = login;
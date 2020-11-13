const express = require("express");
const userRoute = express.Router();
const userController = require("../controller/UserController");

userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);

module.exports = userRoute;

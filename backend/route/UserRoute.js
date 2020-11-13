const express = require("express");
const userRoute = express.Router();
const userController = require("../controller/UserController");

userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
userRoute.get("/getprofile", userController.getProfile);
userRoute.put("/updateprofile", userController.updateProfile);
userRoute.put("/deleteprofile", userController.deleteProfile);
userRoute.get("/getSubjects", userController.getSubjects);

module.exports = userRoute;

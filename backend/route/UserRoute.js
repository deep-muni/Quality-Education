const express = require("express");
const userRoute = express.Router();
const userController = require("../controller/UserController");

userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
userRoute.get("/getprofile", userController.getProfile);
userRoute.put("/updatepassword", userController.updatePassword);
userRoute.put("/updatelocation", userController.updateLocation);
userRoute.put("/updatesubject", userController.updateSubject);

module.exports = userRoute;

const express = require("express");
const registerRoute = express.Router();
const registerController = require("../controller/RegisterController");

registerRoute.get("/getprofile", registerController.getProfile);
registerRoute.put("/updateprofile", registerController.updateProfile);

module.exports = registerRoute;
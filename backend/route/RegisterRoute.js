const express = require("express");
const registerRoute = express.Router();
const registerController = require("../controller/RegisterController");

registerRoute.get("/getprofile", registerController.getProfile);
registerRoute.put("/updateprofile", registerController.updateProfile);
registerRoute.post("/createProfile", registerController.createProfile);

module.exports = registerRoute;
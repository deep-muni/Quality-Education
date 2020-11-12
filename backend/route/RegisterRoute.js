const express = require("express");
const registerRoute = express.Router();
const registerController = require("../controller/RegisterController");

registerRoute.get("/getprofile", registerController.getProfile);
registerRoute.put("/updateprofile", registerController.updateProfile);
registerRoute.post("/createProfile", registerController.createProfile);
registerRoute.put("/deleteprofile", registerController.deleteProfile);
registerRoute.get("/getSubjects", registerController.getSubjects);

module.exports = registerRoute;
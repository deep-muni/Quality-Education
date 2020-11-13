const express = require("express");
const adminRoute = express.Router();
const adminController = require("../controller/AdminController");

adminRoute.get("/getSubjects", adminController.getSubjects);
adminRoute.get("/getLocations", adminController.getLocations);

module.exports = adminRoute;

const express = require("express");
const adminRoute = express.Router();
const adminController = require("../controller/AdminController");

adminRoute.get("/getsubjects", adminController.getSubjects);
adminRoute.get("/getlocations", adminController.getLocations);

module.exports = adminRoute;

const express = require("express");
const adminRoute = express.Router();
const adminController = require("../controller/AdminController");

adminRoute.get("/getsubjects", adminController.getSubjects);
adminRoute.get("/getlocations", adminController.getLocations);
adminRoute.get("/getvolunteers", adminController.getVolunteers);
adminRoute.get("/findvolunteer", adminController.findVolunteer);
adminRoute.post("/addvolunteer", adminController.addVolunteer);
adminRoute.delete("/activatevolunteer", adminController.activateVolunteer);

module.exports = adminRoute;

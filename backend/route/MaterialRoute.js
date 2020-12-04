const express = require("express");
const materialRoute = express.Router();
const materialController = require("../controller/MaterialController");

materialRoute.get("/getmaterial", materialController.getMaterial);
materialRoute.post("/addmaterial", materialController.addMaterial);

module.exports = materialRoute;

const express = require("express");
const loginRoute = express.Router();
const loginController = require("../controller/LoginController");

loginRoute.post("/", loginController.login);

module.exports = loginRoute;
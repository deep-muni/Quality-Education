const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



// Load User model
const User = require("../model/RegisterModel");
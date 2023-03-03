const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/usersControllers");
const router = express.Router();
const User = require("../models/userModel");

// register a new user
router.post("/register", registerUser);

// authenticate a user
router.post("/login", loginUser);

// get your profile
router.get("/me", getMe);

module.exports = router;

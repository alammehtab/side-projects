// could use try-catch to handle the async errors
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register user
// @route   POST /api/v1/users/register
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register user" });
});

// @desc    Login a user
// @route   POST /api/v1/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// @desc    Get your profile
// @route   GET /api/v1/users/me
// @access  public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "Get me" });
});

module.exports = { registerUser, loginUser, getMe };

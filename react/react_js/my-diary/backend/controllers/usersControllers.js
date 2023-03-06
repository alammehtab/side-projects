// could use try-catch to handle the async errors
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register user
// @route   POST /api/v1/users/register
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req?.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user and throw to db
  const user = await User.create({ name, email, password: hashedPassword });

  // if user is created
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJwt(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Sorry, user not created");
  }
});

// @desc    Login a user
// @route   POST /api/v1/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add both fields");
  }

  // check for user email
  const user = await User.findOne({ email });

  // if email is there in db and password matches, means it's a registered user
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJwt(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get your profile
// @route   GET /api/v1/users/me
// @access  private
const getMe = asyncHandler(async (req, res) => {
  // any route that has used protect middleware (authMiddleware) has access to req.user

  res.status(200).json(req.user);
});

// generate JWT
const generateJwt = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { registerUser, loginUser, getMe };

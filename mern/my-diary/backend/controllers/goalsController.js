// could use try-catch to handle the async errors
const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc    Get goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user._id });
  res.status(200).json(goals);
});

// @desc    Set a goal
// @route   POST /api/v1/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // we could send the error ourselves (like follows) but express has built-in error handler
    // res.status(400).json({ message: "Please add goal title." });
    res.status(400);

    // by-default built-in error handler returns the error in html format
    // we've added errorMiddleware to change the content-type from html to json
    throw new Error("Please add goal title.");
  }
  const goal = await Goal.create({ title: req.body.text, user: req.user._id });
  res.status(200).json(goal);
});

// @desc    Update a goal
// @route   PUT /api/v1/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req?.params?.id);

  if (!goal) {
    res.status(400);
    throw Error(`Goal with id ${req?.params?.id} not found.`);
  }

  // if not logged in so can't perform any action
  // this happens when someone directly tries to do something without loggin in
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // make sure the loggin user is creator of the goal
  // goal.user is the userId attached to the goal
  if (goal.user.toString() !== req.user._id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  // update goal, create if not existed
  const updatedGoal = await Goal.findByIdAndUpdate(req?.params?.id, req?.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc    Delete a goal
// @route   DELETE /api/v1/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req?.params?.id);

  if (!goal) {
    res.status(400);
    throw Error(`Goal with id ${req?.params?.id} not found.`);
  }

  // if not logged in so can't perform any action
  // this happens when someone directly tries to do something without loggin in
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // make sure the loggin user is creator of the goal
  // goal.user is the userId attached to the goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Goal.deleteOne({ _id: req?.params?.id });

  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

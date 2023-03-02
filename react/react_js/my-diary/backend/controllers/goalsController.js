// could use try-catch to handle the async errors
const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc    Set a goal
// @route   POST /api/v1/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req?.body?.title) {
    // we could send the error ourselves (like follows) but express has built-in error handler
    // res.status(400).json({ message: "Please add goal title." });
    res.status(400);

    // by-default built-in error handler returns the error in html format
    // we've added errorMiddleware to change the content-type from html to json
    throw new Error("Please add goal title.");
  }
  res.status(200).json({ message: "Set goal." });
});

// @desc    Update a goal
// @route   PUT /api/v1/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc    Delete a goal
// @route   DELETE /api/v1/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

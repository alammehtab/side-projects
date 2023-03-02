// @desc    Get goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc    Set a goal
// @route   POST /api/v1/goals
// @access  Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goal" });
};

// @desc    Update a goal
// @route   PUT /api/v1/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc    Delete a goal
// @route   DELETE /api/v1/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

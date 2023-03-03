const express = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// get goals and set goal handled both, could do it seperately, it reduced the lines of code
router.route("/").get(protect, getGoals).post(protect, setGoal);

// update and delete goal
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;

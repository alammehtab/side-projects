const express = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");
const router = express.Router();

// get goals and set goal handled both, could do it seperately, it reduced the lines of code
router.route("/").get(getGoals).post(setGoal);

// update and delete goal
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;

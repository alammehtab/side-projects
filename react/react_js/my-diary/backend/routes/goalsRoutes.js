const express = require("express");
const router = express.Router();

// get all goals
router.get("/", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// set a goal
router.post("/", (req, res) => {
  res.status(200).json({ message: "Set goal" });
});

// update a goal
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// delete a goal
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

module.exports = router;

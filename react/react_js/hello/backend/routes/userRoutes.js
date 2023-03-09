const express = require("express");
const { registerUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", (req, res) => res.json({ message: "login user" }));

module.exports = router;

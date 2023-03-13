const express = require("express");
const {
  searchUser,
  registerUser,
  loginUser,
} = require("../controllers/userControllers");
const router = express.Router();

router.get("/", searchUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo
} = require("../controllers/authcontroller");
const verifyToken = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getUserInfo);

module.exports = router;
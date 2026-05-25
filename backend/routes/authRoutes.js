const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });
});

router.get("/", (req, res) => {
  res.send("Auth route working");
});

module.exports = router;

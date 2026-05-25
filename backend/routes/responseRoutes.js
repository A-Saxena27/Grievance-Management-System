const express = require("express");

const router = express.Router();

const {
  addResponse,
  getResponses,
} = require("../controllers/responseController");

const { protect } = require("../middleware/authMiddleware");

// Add response
router.post("/:complaintId", protect, addResponse);

// Get responses
router.get("/:complaintId", protect, getResponses);

module.exports = router;

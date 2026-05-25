const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  getAssignedComplaints,
  getComplaintById,
  addComment,
  updateComplaintStatus,
  assignComplaint,
  getComplaintStats,
  getCategoryStats,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authMiddleware");

const { authorizeRoles } = require("../middleware/roleMiddleware");

const upload = require("../middleware/uploadMiddleware");

router.post("/", protect, upload.array("attachments"), createComplaint);

router.get("/my-complaints", protect, getMyComplaints);

router.get(
  "/",
  protect,
  authorizeRoles("admin", "committee"),
  getAllComplaints,
);

// Dashboard stats
router.get(
  "/stats/overview",
  protect,
  authorizeRoles("admin", "committee"),
  getComplaintStats,
);

// Category stats
router.get(
  "/stats/categories",
  protect,
  authorizeRoles("admin", "committee"),
  getCategoryStats,
);

router.get(
  "/assigned",
  protect,
  authorizeRoles("committee"),
  getAssignedComplaints,
);

router.post("/:id/comment", protect, addComment);

router.get("/:id", protect, getComplaintById);

router.put(
  "/:id/status",
  protect,
  authorizeRoles("committee", "admin"),
  updateComplaintStatus,
);

// Assign complaint
router.put("/:id/assign", protect, authorizeRoles("admin"), assignComplaint);

module.exports = router;

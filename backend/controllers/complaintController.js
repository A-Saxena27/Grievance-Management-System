const Complaint = require("../models/Complaint");

// Create a new complaint
const createComplaint = async (req, res) => {
  try {
    const { title, description, category, subcategory, level, priority } =
      req.body;

    const complaint = await Complaint.create({
      title,
      description,
      category,
      subcategory,
      level,
      priority,

      studentId: req.user.id,
    });

    if (!title || !description || !category || !level) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
      data: complaint,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      studentId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaints.length,
      data: complaints,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const { keyword, status, category, level } = req.query;

    let filter = {};

    // Keyword search
    if (keyword) {
      filter.$or = [
        {
          title: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          description: {
            $regex: keyword,
            $options: "i",
          },
        },
      ];
    }

    // Status filter
    if (status) {
      filter.status = status;
    }

    // Category filter
    if (category) {
      filter.category = category;
    }

    // Level filter
    if (level) {
      filter.level = level;
    }

    const complaints = await Complaint.find(filter)
      .populate("studentId", "fullName email department")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaints.length,
      data: complaints,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getAssignedComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      assignedTo: req.user._id,
    });

    res.status(200).json({
      success: true,
      data: complaints,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id).populate(
      "studentId",
      "fullName email department",
    );

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      data: complaint,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    complaint.status = status;

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint status updated",
      data: complaint,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { text } = req.body;

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    complaint.comments.push({
      text,
      commentedBy: req.user._id,
    });

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Comment added",
      data: complaint,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const assignComplaint = async (req, res) => {
  try {
    const { assignedTo } = req.body;

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    complaint.assignedTo = assignedTo;
    complaint.status = "assigned";

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint assigned successfully",
      data: complaint,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getComplaintStats = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();

    const pending = await Complaint.countDocuments({
      status: "pending",
    });

    const assigned = await Complaint.countDocuments({
      status: "assigned",
    });

    const inProgress = await Complaint.countDocuments({
      status: "in_progress",
    });

    const resolved = await Complaint.countDocuments({
      status: "resolved",
    });

    const closed = await Complaint.countDocuments({
      status: "closed",
    });

    res.status(200).json({
      success: true,

      data: {
        totalComplaints,
        pending,
        assigned,
        inProgress,
        resolved,
        closed,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getCategoryStats = async (req, res) => {
  try {
    const stats = await Complaint.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  getAssignedComplaints,
  getComplaintById,
  updateComplaintStatus,
  assignComplaint,
  getComplaintStats,
  getCategoryStats,
  addComment,
};

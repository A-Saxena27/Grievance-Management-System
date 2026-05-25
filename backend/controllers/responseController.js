const Response = require("../models/Response");

const addResponse = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await Response.create({
      message,
      complaintId: req.params.complaintId,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Response added successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const getResponses = async (req, res) => {
  try {
    const responses = await Response.find({
      complaintId: req.params.complaintId,
    })
      .populate("userId", "fullName role")
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: responses.length,
      data: responses,
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
  addResponse,
  getResponses,
};

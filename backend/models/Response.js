const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },

    complaintId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complaint",
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Response", responseSchema);

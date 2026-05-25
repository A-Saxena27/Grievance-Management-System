const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const complaintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
    },
    level: {
      type: String,
      enum: ["department", "institute", "university"],
      required: true,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "assigned",
        "in_progress",
        "resolved",
        "rejected",
        "closed",
      ],
      default: "pending",
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        text: {
          type: String,
        },

        commentedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    attachments: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Complaint", complaintSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "student",
        "department_committee",
        "institute_committee",
        "university_committee",
        "hod",
        "admin",
      ],
      default: "student",
    },
    department: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);

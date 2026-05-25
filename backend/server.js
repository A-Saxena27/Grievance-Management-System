const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

// Allow requests from your specific Vercel URL
app.use(
  cors({
    origin:
      "https://grievance-management-system-81yn91duj-anushree-saxenas-projects.vercel.app",
      "https://grievance-management-system-gkbzh737v-anushree-saxenas-projects.vercel.app",
    credentials: true,
  }),
);

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const responseRoutes = require("./routes/responseRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/responses", responseRoutes);

const errorHandler = require("./middleware/errorMiddleware");

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const router = express.Router();

// Contact form submission route
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Here you can handle the contact form data, e.g., save it to a database or send an email

  res.status(200).json({ message: "Contact form submitted successfully!" });
});

module.exports = router;

const express = require("express");
const verifyAdminToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard", verifyAdminToken, (req, res) => {
  res.json({
    message: "Welcome to Admin Dashboard",
    admin: req.admin,
  });
});

module.exports = router;

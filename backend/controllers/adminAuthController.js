const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginAdmin = (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN ATTEMPT:", email, password);

  db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "Server error" });
      if (results.length === 0)
        return res.status(401).json({ message: "Invalid email or password" });

      const admin = results[0];
      const isMatch = await bcrypt.compare(password, admin.password_hash);

      if (!isMatch)
        return res.status(401).json({ message: "Invalid email or password" });

      const token = jwt.sign(
        { id: admin.id, email: admin.email },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );

      res.json({ token });
    }
  );
};

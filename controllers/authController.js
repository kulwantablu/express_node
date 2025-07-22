const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.query(
    "INSERT INTO login (username, password) VALUES (?, ?)",
    [username, hashedPassword],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User registered successfully" });
    }
  );
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM login WHERE username = ?",
    [username],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });

      if (results.length === 0)
        return res.status(401).json({ error: "User not found" });

      const user = results[0];

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) return res.status(401).json({ error: "Invalid password" });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.json({ message: "Login successful", token });
    }
  );
};

const db = require("../db");

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM admintest", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  const { name, email, phone } = req.body;
  const createdAt = new Date();

  db.query(
    "INSERT INTO admintest (name, email, phone, created_at) VALUES (?, ?, ?, ?, ?)",
    [name, email, phone, createdAt],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "User created", id: result.insertId });
    }
  );
};

exports.updateUser = (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.params;
  const updatedAt = new Date();

  db.query(
    "UPDATE admintest SET name = ?, email = ?,phone = ?, updated_at = ? WHERE id = ?",
    [name, email, phone, updatedAt, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User updated" });
    }
  );
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM admintest WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User deleted" });
  });
};

const db = require("../db");

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM admintest", (err, results) => {
    if (err) {
      console.error("DB Error:", err); // Log the actual DB error
      return res.status(500).json({ error: err });
    }
    res.json(results); // Send results only if no error
  });
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO admintest (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, name, email });
    }
  );
};

exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  db.query(
    "UPDATE admintest SET name=?, email=? WHERE id=?",
    [name, email, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User updated" });
    }
  );
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM admintest WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User deleted" });
  });
};

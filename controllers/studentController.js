const db = require("../db");

exports.getStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createStudents = (req, res) => {
  const {
    name,
    fathername,
    email,
    class: studentClass,
    rollno,
    phone,
  } = req.body;
  const createdAt = new Date();

  db.query(
    "INSERT INTO students (name, fathername, email, class, rollno, phone, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, fathername, email, studentClass, rollno, phone, createdAt],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ message: "User created", id: result.insertId });
    }
  );
};
exports.updateStudents = (req, res) => {
  const { name, fathername, email, studentClass, rollno, phone } = req.body;
  const { id } = req.params;
  const updatedAt = new Date();

  db.query(
    `UPDATE students 
     SET name = ?, fathername = ?, email = ?, class = ?, rollno = ?, phone = ?, updated_at = ?
     WHERE id = ?`,
    [name, fathername, email, studentClass, rollno, phone, updatedAt, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User updated" });
    }
  );
};

exports.deleteStudents = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User deleted" });
  });
};

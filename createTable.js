const db = require("./db");

const createTable = `
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  fathername VARCHAR(100),
  email VARCHAR(150),
  class VARCHAR(50),
  rollno VARCHAR(50),
  phone VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`;

db.query(createTable, (err, result) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log("Table created or already exists.");
  }
  process.exit();
});

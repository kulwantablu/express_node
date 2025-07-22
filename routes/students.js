const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getStudents,
  createStudents,
  updateStudents,
  deleteStudents,
} = require("../controllers/studentController");

console.log("getStudents:", typeof getStudents); // should be 'function'
console.log("createStudents:", typeof createStudents);
console.log("updateStudents:", typeof updateStudents);
console.log("deleteStudents:", typeof deleteStudents);

router.get("/", auth, getStudents);
router.post("/", createStudents);
router.put("/:id", updateStudents);
router.delete("/:id", deleteStudents);

module.exports = router;

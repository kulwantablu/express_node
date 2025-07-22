const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getStudents,
  singleStudents,
  createStudents,
  updateStudents,
  deleteStudents,
} = require("../controllers/studentController");

router.get("/", auth, getStudents);
router.post("/", createStudents);
router.get("/:id", singleStudents);
router.put("/:id", updateStudents);
router.delete("/:id", deleteStudents);

module.exports = router;

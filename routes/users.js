const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", auth, getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

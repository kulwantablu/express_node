const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", getUsers);
//router.get("/", auth, getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

const express = require("express");
const { createUserController, fetchAllUsersController } = require("../../controllers/user");

const router = express.Router();

router.post('/user', createUserController)
router.get("/users", fetchAllUsersController)

module.exports = router;
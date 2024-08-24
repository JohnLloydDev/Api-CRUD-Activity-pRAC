const express = require("express");
const router = express.Router();
const { userRegistration, userLogin, getUsers, updateUsers, deleteUsers, getUser} = require("../controllers/auth.controller");

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/registration", userRegistration);

router.post("/login", userLogin);

router.put("/:id", updateUsers);

router.delete("/:id", deleteUsers);

module.exports = router;
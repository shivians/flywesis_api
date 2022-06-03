const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

//sign up and sign in routes
router.post("/userRegister", userController.register);
router.post("/login", userController.login);
router.get("/getUser", userController.getUser);

module.exports = router;

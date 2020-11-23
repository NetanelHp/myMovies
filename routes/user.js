const express = require("express");
const route = express.Router();
const {
  registerValidation,
  loginValidation,
} = require("../validators/userValidator");
const {
  authUser,
  registerUser,
  loginUser,
} = require("../controller/userController");
const auth = require("../auth/auth");

route.route("/load").get(auth, authUser);
route.route("/register").post(registerValidation, registerUser);
route.route("/login").post(loginValidation, loginUser);

module.exports = route;

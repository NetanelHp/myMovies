const express = require("express");
const route = express.Router();
const {
  addFavMovie,
  removeFavMovie,
  getFavMovies,
} = require("../controller/movieController");
const auth = require("../auth/auth");

route.route("/addMovie").post(auth, addFavMovie);
route.route("/removeMovie/:id").delete(auth, removeFavMovie);
route.route("/getFavMovies").get(auth, getFavMovies);

module.exports = route;

const Movie = require("../models/Movie");
const User = require("../models/User");

exports.addFavMovie = async (req, res) => {
  try {
    let user = await User.findById(req.user);
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }
    //Set new favorite movie
    const movie = new Movie(req.body);
    await movie.save();
    user.movies.push(movie);
    await user.save();
    return res.status(200).json(movie);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};

exports.removeFavMovie = async (req, res) => {
  try {
    let user = await User.findById(req.user);
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }
    const deletedMovie = await Movie.findOneAndDelete({
      movieId: req.params.id,
    });
    user.movies.pull(deletedMovie._id);
    await user.save();
    return res.status(200).json(deletedMovie);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};

exports.getFavMovies = async (req, res) => {
  try {
    let user = await User.findById(req.user);
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }
    const movies = await user.execPopulate("movies");
    return res.status(200).json(movies.movies);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};

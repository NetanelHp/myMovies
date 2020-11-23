import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import StarRateIcon from "@material-ui/icons/StarRate";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Button } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import { GlobalContext } from "../context/GlobalContext";

const MovieDesc = (props) => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState({});
  const [movieLoaded, setMovieLoaded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { addToFavorite, favMovies, deleteFromFavoite } = useContext(
    GlobalContext
  );

  const checkFavorites = () => {
    favMovies.forEach((movie) => {
      if (movie.movieId.toString() === id) {
        setFavorite(true);
      }
    });
  };
  useEffect(() => {
    const loadMovie = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovie(res.data);
      setMovieLoaded(true);
    };

    loadMovie();
    checkFavorites();

    // eslint-disable-next-line
  }, []);

  const onClickFavorite = () => {
    const newFavorite = {
      movieId: id,
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
    };
    addToFavorite(newFavorite);
    setFavorite(true);
  };

  const onClickRemoveFavorite = () => {
    deleteFromFavoite(id);
    setFavorite(false);
  };

  return (
    <div className="movieDescSection">
      <div className="movieDescImage">
        <div className="imageWrapper">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="desc"
          />
        </div>
      </div>

      <div className="movieDescContent">
        <div className="titleDesc">
          <h2>{movie.title}</h2>
          <p>
            Genres:{" "}
            {movieLoaded &&
              movie.genres.map((genre) => {
                return genre.name + ", ";
              })}
          </p>
          <p>{movie.overview}</p>
        </div>
        <div className="detailsDesc">
          <div className="vote card">
            <h3>Vote Rate</h3>
            <StarRateIcon />
            <p>{movie.vote_average}</p>
          </div>

          <div className="releaseDate card">
            <h3>Release Date</h3>
            <EventIcon />
            <p>{movie.release_date}</p>
          </div>

          <div className="runTime card">
            <h3>Run Time</h3>
            <ScheduleIcon />
            <p>{movie.runtime} MIN</p>
          </div>
        </div>

        <div className="siteDesc">
          <div className="imdbWrapper">
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/imdb.png" alt="imdb" />
            </a>
          </div>
          {movie.homepage && (
            <div className="siteWrapper">
              <a href={movie.homepage} target="_blank" rel="noreferrer">
                <img src="/images/webSiteLogo.png" alt="www" />
              </a>
            </div>
          )}
        </div>
        <div className="favBtnWrapper">
          {!favorite ? (
            <Button
              onClick={onClickFavorite}
              className="favoriteBtn"
              startIcon={<ThumbUpAltIcon />}
              variant="outlined"
              color="primary"
            >
              Add To Favorite
            </Button>
          ) : (
            <Button
              onClick={onClickRemoveFavorite}
              className="removeFavoriteBtn"
              startIcon={<ThumbDownAltIcon />}
              variant="outlined"
              color="secondary"
            >
              Remove From Favorite
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;

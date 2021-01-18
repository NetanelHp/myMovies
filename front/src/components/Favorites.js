import { Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Favorites = () => {
  const { getFavorites, user, favMovies, isAuth } = useContext(GlobalContext);

  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line
  }, []);

  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div className="favSection">
      <h1>Hello {user && user.name}</h1>
      <div className="avatarWrapper">
        <img src={user && user.avatar} alt="avatar" />
      </div>
      <h3 style={{ marginTop: 50 }}>Your favorite movies</h3>
      <Grid container className="favMoviesGrid">
        {favMovies &&
          favMovies.map((movie) => {
            return (
              <Grid item xs={12} md={4} lg={3}>
                <Link
                  to={`/movies/${movie.movieId}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="favImageWrapper">
                    <h4>{movie.title}</h4>
                    <img src={favMovies && movie.poster} alt="fav" />
                  </div>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Favorites;

import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <div className="imageWraper">
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="poster"
          />
        </Link>
      </div>
    </Grid>
  );
};

export default Movie;

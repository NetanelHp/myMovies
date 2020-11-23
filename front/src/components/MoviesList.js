import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import Search from "./Search";
const MoviesList = () => {
  const { getAllMovies, moviesList, loading } = useContext(GlobalContext);
  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="moviesSection">
      <h1>Explore Movies World</h1>
      <Search />
      <Grid container className="moviesGrid">
        {loading ? (
          <h1>loading...</h1>
        ) : (
          moviesList.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })
        )}
      </Grid>
    </div>
  );
};

export default MoviesList;

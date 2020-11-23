import React, { createContext, useReducer } from "react";
import moviesReducer from "./MoviesReducer";
import userReducer from "./UserReducer";
import favReducer from "./favReducer";
import axios from "axios";

const initialMoviesState = {
  movies: [],
  loading: true,
};

const initialUserState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  user: null,
  isLoading: false,
  errors: [],
};

const initialFavState = {
  movies: [],
  isLoading: false,
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [moviesState, dispatchMovies] = useReducer(
    moviesReducer,
    initialMoviesState
  );

  const [userState, dispatchUser] = useReducer(userReducer, initialUserState);

  const [favState, dispatchFav] = useReducer(favReducer, initialFavState);

  let postConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let getConfig = {
    headers: {},
  };

  const KEY = process.env.REACT_APP_API_KEY;
  //User Actions
  const loadUser = async () => {
    dispatchUser({ type: "LOADING_USER" });
    try {
      const token = localStorage.token;

      if (token) {
        getConfig.headers["x-auth-token"] = token;
      }
      console.log(getConfig);
      const res = await axios.get("/api/user/load", getConfig);
      dispatchUser({ type: "USER_LOADED", payload: res.data });
    } catch (err) {
      console.error(err.message);
    }
  };

  const registerUser = async (user) => {
    try {
      await axios.post("/api/user/register", JSON.stringify(user), postConfig);
      dispatchUser({
        type: "REGISTER_SUCCESS",
      });
    } catch (err) {
      dispatchUser({
        type: "FAILED",
        payload: err.response.data.errors,
      });
    }
  };

  const loginUser = async (user) => {
    try {
      const res = await axios.post(
        "/api/user/login",
        JSON.stringify(user),
        postConfig
      );
      dispatchUser({
        type: "LOGIN_SUCCESS",
        payload: res.data.token,
      });
      loadUser();
    } catch (err) {
      dispatchUser({
        type: "FAILED",
        payload: err.response.data.errors,
      });
    }
  };

  const logout = () => {
    dispatchUser({
      type: "LOGOUT_USER",
    });
  };

  //Movies Actions
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`
      );
      dispatchMovies({
        type: "GET_MOVIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getSearchedMovies = async (input) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${input}`
      );
      dispatchMovies({
        type: "GET_MOVIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  //Favorite actions
  const addToFavorite = async (movie) => {
    postConfig.headers["x-auth-token"] = userState.token;
    try {
      const res = await axios.post(
        "/api/movie/addMovie",
        JSON.stringify(movie),
        postConfig
      );
      dispatchFav({
        type: "ADD_FAVORITE",
        payload: res.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteFromFavorite = async (id) => {
    postConfig.headers["x-auth-token"] = userState.token;
    try {
      await axios.delete(`/api/movie/removeMovie/${id}`, postConfig);
      dispatchFav({
        type: "DELETE_FAVORITE",
        payload: id,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getFavorites = async () => {
    postConfig.headers["x-auth-token"] = userState.token;
    try {
      const res = await axios.get("/api/movie/getFavMovies", postConfig);
      dispatchFav({
        type: "GET_FAV_MOVIES",
        payload: res.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        moviesList: moviesState.movies,
        loading: moviesState.loading,
        user: userState.user,
        getAllMovies,
        getSearchedMovies,
        registerUser,
        loginUser,
        loadUser,
        logout,
        addToFavorite,
        deleteFromFavorite,
        getFavorites,
        favMovies: favState.movies,
        isAuth: userState.isAuth,
        errors: userState.errors,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

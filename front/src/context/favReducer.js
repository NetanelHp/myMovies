const favReducer = (state, action) => {
  switch (action.type) {
    case "GET_FAV_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.movieId !== action.payload
        ),
      };

    case "ADD_FAVORITE":
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};

export default favReducer;

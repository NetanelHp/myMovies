const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        errors: [],
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        errors: [],
      };
    case "LOADING_USER":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: action.payload,
      };
    case "LOGOUT_USER":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: null,
        user: null,
        isLoading: false,
        token: null,
      };
    case "FAILED":
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const { loginUser, errors, isAuth } = useContext(GlobalContext);

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputLogin;

  const onInputChange = (e) => {
    setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };

  const onClickLogin = () => {
    const user = {
      email,
      password,
    };
    loginUser(user);
  };

  if (isAuth) {
    return <Redirect to="/welcome" />;
  }
  return (
    <div className="loginSection">
      <div className="loginContent">
        <div className="loginText">
          <h1>good to see you again!</h1>
          <p>sign in to the world of movies</p>
        </div>
        <div className="loginImage">
          <img src="images/login.svg" alt="login" />
        </div>
      </div>

      <div className="loginForm">
        <div className="formContainer">
          <TextField
            onChange={onInputChange}
            value={email}
            name="email"
            label="Email"
            autoFocus={true}
            className="textField"
            variant="outlined"
            size="small"
            fullWidth
          />
          <TextField
            onChange={onInputChange}
            value={password}
            type="password"
            name="password"
            label="Password"
            className="textField"
            variant="outlined"
            size="small"
            fullWidth
          />
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              color="primary"
              size="small"
              style={{ marginBottom: 15 }}
            >
              Don't have an account? Register here
            </Button>
          </Link>
          <Button
            style={{ marginBottom: 10 }}
            onClick={onClickLogin}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <div className="userErrors">
            {errors &&
              errors.map((alert) => {
                return (
                  <Alert className="alert" variant="outlined" severity="error">
                    {alert.msg}
                  </Alert>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

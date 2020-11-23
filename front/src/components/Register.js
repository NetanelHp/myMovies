import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Register = () => {
  const { registerUser, errors } = useContext(GlobalContext);

  const [inputRegister, setInputRegister] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { name, email, password, rePassword } = inputRegister;

  const onInputChange = (e) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };

  const onClickRegister = (e) => {
    if (password !== rePassword) {
      alert("Passwords Not matches");
    } else {
      const user = {
        name,
        email,
        password,
      };
      registerUser(user);
    }
  };

  return (
    <div>
      <div className="registerSection">
        <div className="registerForm">
          <div className="formContainer">
            <TextField
              value={name}
              name="name"
              label="Name"
              autoFocus={true}
              className="textField"
              variant="outlined"
              size="small"
              fullWidth
              onChange={onInputChange}
            />
            <TextField
              value={email}
              name="email"
              label="Email"
              className="textField"
              variant="outlined"
              size="small"
              fullWidth
              onChange={onInputChange}
            />
            <TextField
              value={password}
              type="password"
              name="password"
              label="Password"
              className="textField"
              variant="outlined"
              size="small"
              fullWidth
              onChange={onInputChange}
            />
            <TextField
              value={rePassword}
              type="password"
              name="rePassword"
              label="Re-Password"
              className="textField"
              variant="outlined"
              size="small"
              fullWidth
              onChange={onInputChange}
            />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                color="primary"
                size="small"
                style={{ marginBottom: 15 }}
              >
                Already have an account? Go to Login
              </Button>
            </Link>
            <Button
              onClick={onClickRegister}
              variant="contained"
              color="secondary"
            >
              Register
            </Button>
            <div className="userErrors">
              {errors &&
                errors.map((alert) => {
                  return (
                    <Alert
                      className="alert"
                      variant="outlined"
                      severity="error"
                    >
                      {alert.msg}
                    </Alert>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="registerContent">
          <div className="registerText">
            <h1>Join our community!</h1>
            <p>we all love movies</p>
          </div>
          <div className="registerImage">
            <img src="images/register.svg" alt="register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

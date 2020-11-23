import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { GlobalContext } from "../context/GlobalContext";

const NavBar = () => {
  const { logout } = useContext(GlobalContext);
  return (
    <AppBar
      className="navBar"
      position="static"
      style={{ background: "transparent" }}
    >
      <Toolbar className="toolBar">
        <MovieFilterIcon style={{ color: "black" }} />
        <Typography variant="h6" style={{ flexGrow: 1, color: "black" }}>
          Movies
        </Typography>
        <Link to="/welcome" style={{ textDecoration: "none" }}>
          <Button>Home</Button>
        </Link>
        <Link to="/movies" style={{ textDecoration: "none" }}>
          <Button>movies</Button>
        </Link>
        <Link to="/favorites" style={{ textDecoration: "none" }}>
          <Button>Favorites</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button onClick={() => logout()}>Logout</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

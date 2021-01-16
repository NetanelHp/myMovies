import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { GlobalContext } from "../context/GlobalContext";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  const { logout } = useContext(GlobalContext);

  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

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
        <div className={sideBar ? "navList active" : "navList"}>
          <Link
            className="listItem"
            to="/welcome"
            style={{ textDecoration: "none" }}
          >
            <Button onClick={toggleSideBar}>Home</Button>
          </Link>
          <Link
            className="listItem"
            to="/movies"
            style={{ textDecoration: "none" }}
          >
            <Button onClick={toggleSideBar}>movies</Button>
          </Link>
          <Link
            className="listItem"
            to="/favorites"
            style={{ textDecoration: "none" }}
          >
            <Button>Favorites</Button>
          </Link>
          <Link className="listItem" to="/" style={{ textDecoration: "none" }}>
            <Button onClick={() => logout()}>Logout</Button>
          </Link>
        </div>

        <div className="menuIcon">
          <Button onClick={toggleSideBar}>
            <MenuIcon style={{ color: "black" }} />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

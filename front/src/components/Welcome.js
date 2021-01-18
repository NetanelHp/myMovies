import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Redirect } from "react-router-dom";

const Welcome = () => {
  const { isAuth } = useContext(GlobalContext);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="welcomeSection">
      <div className="heroTitle">
        <p>
          All Your Favorite Movies in <span>One</span> Site
        </p>
      </div>
      <div className="heroImage">
        <img src="images/welcome.svg" alt="hero" />
      </div>
    </div>
  );
};

export default Welcome;

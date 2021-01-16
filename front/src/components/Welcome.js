import React from "react";

const Welcome = () => {
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

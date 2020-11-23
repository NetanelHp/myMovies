import React from "react";

const Welcome = () => {
  return (
    <div className="welcomeSection">
      <div className="hero">
        <div className="heroTitle">
          <div>
            <p>
              All Your Favorite Movies in <span>One</span> Site
            </p>
          </div>
        </div>
        <div className="heroImage">
          <img src="images/welcome.svg" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";
import "./headingwithbutton.scss";

const headingwithbutton = () => {
  return (
    <div className="container">
      <h1 className="heading">
        Sturdily beautiful. Warm, bright. Naturally comforting. Timelessly{" "}
        <span className="subheading">modern.</span>
      </h1>
      <div className="buttonContainer">
        <button className="button">Let's Start</button>
      </div>
    </div>
    
  );
};

export default headingwithbutton;

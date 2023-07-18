import React from "react";

export default function TopContainer() {
  return (
    <div id="top-container">
      <div className="container container-sub p-2 pt-5 pb-5">
        <img className="top-sparkles" src="images/sparkles.png" alt="sparkles-img" />
        <h1>I'm Antonio.</h1>
        <h2>A <span>pro</span>grammer.</h2>
        <img className="earth mt-4" src="images/world.png" alt="world-img" />
        <div></div>
        <img className="bottom-sparkles" src="images/sparkles.png" alt="sparkles-img" />
      </div>
    </div>
  );
};

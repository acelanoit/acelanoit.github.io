import React from "react";
import Canvas from "./Canvas";

export default function ThirdContainer() {
  return (
    <div id="third-container">
      <div className="container container-sub">
        <div class="row">
          <div class="col-12 col-md-6 my-5">
            <h3>How my coworkers see me</h3>
            <img src="images/me.jpg" alt="homer-any-key" className="gif" />
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>How my family sees me</h3>
            <img src="images/brain.jpg" alt="homer-any-key" className="gif" />
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>How I see myself</h3>
            <img src="images/homer.gif" alt="homer-any-key" className="gif" />
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>How I really am</h3>
            <Canvas />
          </div>
        </div>
      </div>
    </div>
  );
};

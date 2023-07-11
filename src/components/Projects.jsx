import React from "react";
import ControlledCarousel from "./ControlledCarousel";

export default function Projects() {
  return (
    <div id="projects">
      <div className="container container-sub">
        <div class="row">
          <div class="col-12 col-md-6 my-5">
            <h3>List of Employees</h3>
            <p>A website to list employees, created with the MERN stack. Solely responsible for the website's creation.</p>
            <ControlledCarousel />
            <button className="btn button-small">GitHub</button>
            <button className="btn button-small">Deployment</button>
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>Case Converter</h3>
            <p>A case converter created with React. Solely responsible for the website's creation.</p>
            <ControlledCarousel />
            <button className="btn button-small">GitHub</button>
            <button className="btn button-small">Deployment</button>
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>Hobber</h3>
            <p>A mobile website created with Ruby on Rails for gamers to find gaming partners. Responsible for 80% of the back end.</p>
            <ControlledCarousel />
            <button className="btn button-small">GitHub</button>
            <button className="btn button-small">Deployment</button>
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>Halloween Dog</h3>
            <p>A side-scrolling video game created with HTML canvas and JavaScript. Followed an online tutorial for the base game and then added more features to it myself.</p>
            <ControlledCarousel />
            <button className="btn button-small">GitHub</button>
            <button className="btn button-small">Deployment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

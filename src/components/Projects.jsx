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
            <a href="https://github.com/acelanoit/MERN-App---List-of-Employees" target="_blank" rel="noreferrer">
              <button className="btn button-small">GitHub</button>
            </a>
            <a href="https://mern-list-of-employees.vercel.app/" target="_blank" rel="noreferrer">
              <button className="btn button-small">Deployment</button>
            </a>
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>Case Converter</h3>
            <p>A case converter created with React. Solely responsible for the website's creation.</p>
            <ControlledCarousel />
            <a href="https://github.com/acelanoit/case-converter" target="_blank" rel="noreferrer">
              <button className="btn button-small">GitHub</button>
            </a>
            <a href="https://acelanoit.github.io/case-converter/" target="_blank" rel="noreferrer">
              <button className="btn button-small">Deployment</button>
            </a>
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>Hobber</h3>
            <p>A mobile website created with Ruby on Rails for gamers to find gaming partners. Responsible for 80% of the back end.</p>
            <ControlledCarousel />
            <a href="https://github.com/eaudepaul/Hobber" target="_blank" rel="noreferrer">
              <button className="btn button-small">GitHub</button>
            </a>
            <a href="https://www.hobber.eu/" target="_blank" rel="noreferrer">
              <button className="btn button-small">Deployment</button>
            </a>
          </div>
          <div class="col-12 col-md-6 my-5">
            <h3>Halloween Dog</h3>
            <p>A side-scrolling video game created with HTML canvas and JavaScript. Followed an online tutorial for the base game and then added more features to it myself.</p>
            <ControlledCarousel />
            <a href="https://github.com/acelanoit/halloween-dog" target="_blank" rel="noreferrer">
              <button className="btn button-small">GitHub</button>
            </a>
            <a href="https://acelanoit.github.io/halloween-dog/" target="_blank" rel="noreferrer">
              <button className="btn button-small">Deployment</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import ControlledCarousel from "./ControlledCarousel";

export default function Projects() {
  return (
    <div id="projects">
      <div className="container container-sub">
        <h2>Some of my best projects:</h2>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 my-5">
            <h3>List of Employees</h3>
            <p>A website to list employees, created with the MERN stack. I was solely responsible for developing the entire website from scratch. The website allows to perform all CRUD operations, providing a user-friendly interface and seamless functionality.</p>
            <ControlledCarousel img1="images/1-1.png" img2="images/1-2.png" img3="images/1-3.png" blank="images/blank-horizontal.png" />
            <a href="https://github.com/acelanoit/MERN-App---List-of-Employees" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">GitHub</button>
            </a>
            <a href="https://mern-list-of-employees.vercel.app/" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">Deployment</button>
            </a>
          </div>
          <div className="col-12 col-md-12 col-lg-6 my-5">
            <h3>Halloween Dog</h3>
            <p>A side-scrolling video game created with HTML canvas and JavaScript. I took an existing tutorial-based game and expanded its features, enhancing the experience by adding new elements and challenges that made the game more engaging.</p>
            <ControlledCarousel img1="images/2-1.png" img2="images/2-2.png" img3="images/2-3.png" blank="images/blank-horizontal.png" />
            <a href="https://github.com/acelanoit/halloween-dog" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">GitHub</button>
            </a>
            <a href="https://acelanoit.github.io/halloween-dog/" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">Deployment</button>
            </a>
          </div>
          <div className="col-12 col-md-12 col-lg-6 my-5">
            <h3>Hobber</h3>
            <p>A mobile website designed specifically for gamers to connect and find gaming partners, created with Ruby on Rails. I played a crucial role in developing the backend of the website, contributing to approximately 80% of its functionality.</p>
            <ControlledCarousel img1="images/3-1.png" img2="images/3-2.png" img3="images/3-3.png" blank="images/blank-horizontal.png" />
            <a href="https://github.com/eaudepaul/Hobber" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">GitHub</button>
            </a>
            <a href="https://www.hobber.eu/" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">Deployment</button>
            </a>
          </div>
          <div className="col-12 col-md-12 col-lg-6 my-5">
            <h3>Case Converter</h3>
            <p>A React-based case converter application. I took full ownership of the project, creating a website that allows users to convert text between different letter cases. The user-friendly interface facilitates easy text input and conversion.</p>
            <ControlledCarousel img1="images/4-1.png" img2="images/4-2.png" img3="images/4-3.png" blank="images/blank-horizontal.png" />
            <a href="https://github.com/acelanoit/case-converter" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">GitHub</button>
            </a>
            <a href="https://acelanoit.github.io/case-converter/" target="_blank" rel="noreferrer">
              <button className="btn btn-sm button m-2">Deployment</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

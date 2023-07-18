import React from "react";

// We use Route in order to define the different routes of our application:
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item ms-auto">
                <a href="#about"><button className="btn btn-lg navbar-button m-1 button">About</button></a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#projects"><button className="btn btn-lg navbar-button m-1 button">Work</button></a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#skills"><button className="btn btn-lg navbar-button m-1 button">Skills</button></a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#meme"><button className="btn btn-lg navbar-button m-1 button">More</button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<>
        </>} />
        <Route path="/" element={<>
          <div className="container-fluid">
          </div>
        </>} />
      </Routes>
    </div>
  );
}

export default Navbar;

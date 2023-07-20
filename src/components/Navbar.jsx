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
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item ms-auto">
                <a href="#about"><h3 className="navbar-link m-2">About</h3></a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#projects"><h3 className="navbar-link m-2">Work</h3></a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#skills"><h3 className="navbar-link m-2">Skills</h3></a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#meme"><h3 className="navbar-link m-2">More</h3></a>
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

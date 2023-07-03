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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item ms-auto">
                  <Link to="/"><button className="btn btn-light btn-sm navbar-button">Home</button></Link>
                </li>
                <li className="nav-item ms-auto">
                  <Link to="/about"><button className="btn btn-light btn-sm navbar-button">About</button></Link>
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

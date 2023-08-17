import React from "react";

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
                <a href="#about" className="navbar-link m-2">About</a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#skills" className="navbar-link m-2">Skills</a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#projects" className="navbar-link m-2">Work</a>
              </li>
              <li className="nav-item ms-auto">
                <a href="#footer" className="navbar-link m-2">Contact</a>
              </li>
              <li className="nav-item ms-auto">
                <a href="Antonio Celano - Resume.pdf" className="navbar-link m-2" download>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

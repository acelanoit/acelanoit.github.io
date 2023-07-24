import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container container-sub p-2 pt-3 pb-3">
        <h3 className="mb-3">Get in touch:</h3>
        <a href="mailto:antonio_celano@hotmail.com"><i className="fa-regular fa-envelope fa-3x"></i></a>
        <a href="https://www.linkedin.com/in/antonio-celano-web-developer/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-3x mx-5"></i></a>
        <a href="https://github.com/acelanoit" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-3x"></i></a>
        <p className="copyright my-5">Copyright © 2022 - {new Date().getFullYear()} Antonio Celano</p>
        <a className="attributions mb-2" href="https://www.flaticon.com/free-icons/environment" title="environment icons">Environment icons created by Freepik - Flaticon</a>
        <a className="attributions" href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Freepik - Flaticon</a>
      </div>
    </div>
  );
};

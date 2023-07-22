import React from "react";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div id="about">
      <div className="container container-sub p-2 pt-5 pb-5">

        <div className="row">
          <div className="col-12 col-md-6 container-sub about-box">
            <img className="profile-pic rounded-circle" src="images/profile.jpg" alt="profile" />
          </div>
          <div className="col-12 col-md-6 container-sub about-box">
            <div>
              <div className="mb-3 d-block d-md-none"></div>
              <Typewriter
                options={{
                  strings: ["Hello, World!"],
                  autoStart: true,
                  loop: true
                }}
              />
              <p className="mx-2 mb-0">As an aspiring coding professional, I have pursued my passion for programming through various avenues, including completing an online coding course, recently graduating from the prestigious Le Wagon coding bootcamp, and a great deal of self-learning. While I appreciate the aesthetics and user experience considerations of front-end development, my true passion lies in what remains invisible to the user and in building the logic of applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

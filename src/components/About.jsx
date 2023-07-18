import React from "react";

export default function About() {
  return (
    <div id="about">
      <div className="container container-sub p-2 pt-5 pb-5">
        <img className="profile-pic rounded-circle" src="images/profile.jpg" alt="profile" />
        <h2 className="mt-4">Hello, World!</h2>
        <p className="mx-2 mb-0">As an aspiring coding professional, I have pursued my passion for programming through various avenues, including completing an online coding course and recently graduating from the prestigious Le Wagon coding bootcamp. While I appreciate the aesthetics and user experience considerations of front-end development, my true passion lies in what remains invisible to the user and in building the logic of applications.</p>
      </div>
    </div>
  );
};

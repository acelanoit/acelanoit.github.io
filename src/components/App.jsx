import React from "react";
// We import all the components we need in our app:
import Navbar from "./Navbar";
import TopContainer from "./TopContainer";
import About from "./About";
import Projects from "./Projects";
import Meme from "./Meme";

export default function App() {
  return (
    <div>
      <Navbar />
      <TopContainer />
      <About />
      <Projects />
      <Meme />
    </div>
  );
};

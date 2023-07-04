import React from "react";
// We import all the components we need in our app:
import Navbar from "./Navbar";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";

export default function App() {
  return (
    <div>
      <Navbar />
      <FirstContainer />
      <SecondContainer />
    </div>
  );
};

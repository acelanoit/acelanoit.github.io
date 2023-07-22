import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Make body visible on load to prevent FOUC
window.addEventListener("load", function () {
  document.body.style.visibility = "visible";
});

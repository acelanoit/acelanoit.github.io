import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Your custom CSS file. You can use a single file and import it either on your index.js or your App.js file,
// or use multiple files (like App.css and so on) and import them only where needed.
// Styles defined in the CSS file imported will override styles defined in different CSS files imported in parent components
// if they refer to the same element(s):
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

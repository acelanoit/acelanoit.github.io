import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// We use BrowserRouter to keep our UI in sync with the URL.
// BrowserRouter helps with seamless transitions while switching between components.
// Basically, it will only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page.
// Though BrowserRouter is not a necessity, it is a must if you want your app to be responsive.
// GitHub Pages does not support browser history like your browser does.
// To overcome this problem, we need to use a Hash Router instead of a Browser Router in our application.
// This type of router uses the hash portion of the URL to keep the UI in sync with the URL.
import { HashRouter as Router } from "react-router-dom";

// Your custom CSS file. You can use a single file and import it either on your index.js or your App.js file,
// or use multiple files (like App.css and so on) and import them only where needed.
// Styles defined in the CSS file imported will override styles defined in different CSS files imported in parent components
// if they refer to the same element(s):
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

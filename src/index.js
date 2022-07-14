// import the packages
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
// import the main container for the whole application
import PortfolioContainer from "./components/PortfolioContainer";
// animate.css is used for the animation when changing pages
import "animate.css";
// this contains the font and the animation for the cards in the portfolio component
import "./css/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioContainer />
  </React.StrictMode>
);

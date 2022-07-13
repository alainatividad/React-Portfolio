import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import PortfolioContainer from "./components/PortfolioContainer";
import "animate.css";
import "./css/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioContainer />
  </React.StrictMode>
);

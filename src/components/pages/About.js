import React from "react";
import img from "../../img/alyssa.JPG";

// this component contains an image and a short description
export default function About() {
  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <div className="row justify-content-around">
        <div className="col-12 col-md-6 p-5">
          <div className="text-center">
            <img
              src={img}
              className="rounded-circle img-fluid img-thumbnail w-auto"
              alt="portfolio owner"
            ></img>
          </div>
        </div>
        <div className="col-12 col-md-6 align-self-center p-3">
          <p className="fs-3">
            An accomplished and fluent communicator with strong investigation,
            problem-solving and decision-making skills enhanced by previous
            application support and development roles. Excited to transition
            into a new career as a full-stack web developer.
          </p>
        </div>
      </div>
    </div>
  );
}

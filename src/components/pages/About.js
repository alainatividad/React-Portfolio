import React from "react";
import img from "../../img/alyssa.JPG";

export default function About() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-around py-5">
        <div className="col col-sm-12 col-md-6 col-lg-5">
          <div className="text-center">
            <img
              src={img}
              className="rounded img-fluid img-thumbnail w-auto"
              alt="portfolio owner"
            ></img>
          </div>
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-5 align-self-center">
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

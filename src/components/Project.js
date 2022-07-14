import React from "react";

// create a resuable component for the projects inside the portfolio component
export default function Project({ project }) {
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
  };
  return (
    // each project is a card that contains an image, links to both Github repository and/or published web app and a description.
    <div className="col">
      <div className="card mb-3">
        <img
          src={project.imgSrc}
          className="img-fluid rounded-top"
          alt="..."
          style={imgStyle}
        ></img>
        <br></br>
        <a
          href={project.github}
          className="d-flex justify-content-center text-decoration-none"
          rel="noopener"
        >
          Github Repository
        </a>
        <a
          href={project.site}
          className="d-flex justify-content-center text-decoration-none"
          rel="noopener"
        >
          {project.name}
        </a>
        <div className="card-body">
          <h5 className="card-title text-dark">{project.name}</h5>
          <p className="card-text text-dark">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

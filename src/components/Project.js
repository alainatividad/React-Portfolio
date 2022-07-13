import React from "react";

export default function Project({ project }) {
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
  };
  return (
    <div className="col">
      <div className="card mb-3">
        <img
          src={project.imgSrc}
          className="img-fluid rounded-start"
          alt="..."
          style={imgStyle}
        ></img>
        <br></br>
        <a
          href={project.github}
          className="d-flex justify-content-center text-decoration-none"
        >
          Github Repository
        </a>
        <a
          href={project.site}
          className="d-flex justify-content-center text-decoration-none"
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

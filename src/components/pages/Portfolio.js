import React from "react";
import Project from "../Project";

// Portfolio component requires an array of projects that it would then map and pass on to the Project component
export default function Portfolio({ projects }) {
  return (
    <div className="container col-12 mt-5 pt-3 animate__animated animate__fadeIn">
      <h2 className="mb-3 text-center">Projects</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

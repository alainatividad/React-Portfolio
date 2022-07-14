import React from "react";
import resume from "../../docs/AlyssaNatividad_Resume.pdf";

// Resume component contains the list of both front-end and back-end proficiencies shown as a list and also a link to the resume that is loaded at the top
export default function Resume() {
  return (
    <div className="container col-12 mt-5 pt-3 animate__animated animate__fadeIn">
      <h2 className="mb-3 text-center">Resume</h2>
      <h4 className="m-3 text-center">
        Front-end Proficiencies
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-display py-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
        </svg>
      </h4>
      <div className="d-flex justify-content-center flex-column text-center py-2">
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">HTML</li>
          <li className="list-group-item list-group-item-dark">CSS</li>
          <li className="list-group-item list-group-item-dark">JavaScript</li>
          <li className="list-group-item list-group-item-dark">jQuery</li>
          <li className="list-group-item list-group-item-dark">
            Responsive Design
          </li>
          <li className="list-group-item list-group-item-dark">React</li>
          <li className="list-group-item list-group-item-dark">Bootstrap</li>
        </ul>
      </div>
      <h4 className="m-3 text-center">
        Back-end Proficiencies
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-server py-1"
          viewBox="0 0 16 16"
        >
          <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
          <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z" />
          <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
        </svg>
      </h4>
      <div className="d-flex justify-content-center flex-column text-center pb-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-dark">API's</li>
          <li className="list-group-item list-group-item-dark">Node.js</li>
          <li className="list-group-item list-group-item-dark">Express</li>
          <li className="list-group-item list-group-item-dark">
            MySQL, Sequelize
          </li>
          <li className="list-group-item list-group-item-dark">
            MongoDB/NoSQL, Mongoose
          </li>
          <li className="list-group-item list-group-item-dark">GraphQL</li>
          <li className="list-group-item list-group-item-dark">REST</li>
        </ul>
      </div>
      <div className="text-center">
        <a href={resume} className="text-decoration-none text-white" download>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-download py-1"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
          Download my resume
        </a>
      </div>
    </div>
  );
}

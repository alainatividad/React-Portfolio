import React from "react";

export default function Nav() {
  const linkStyle = {
    border: "1px black",
    padding: "5px",
    backgroundColor: "#e3f2fd",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={linkStyle}>
      {/* <div className="container-fluid"> */}
      <a className="navbar-brand" href="#home">
        Alyssa Natividad
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav"
        aria-controls="nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item active">
            <a className="nav-link" href="#about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
}

import React from "react";

export default function Nav() {
  const navStyle = {
    padding: "20px 10px",
    backgroundImage:
      "linear-gradient(50deg,#0D1B2A,#1B263B,#415A77,#778DA9,#E0E1DD)",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
      <span class="navbar-brand ms-3 fs-2">Alyssa Natividad</span>
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
      <div className="collapse navbar-collapse justify-content-end" id="nav">
        <ul className="navbar-nav justify-content">
          <li className="nav-item active px-3 fs-3">
            <a className="nav-link text-dark" href="#about">
              About Me
            </a>
          </li>
          <li className="nav-item px-3 fs-3">
            <a className="nav-link text-dark" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item px-3 fs-3">
            <a className="nav-link text-dark" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item px-3 fs-3">
            <a className="nav-link text-dark" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  // const navStyle = {
  //   padding: "20px 10px",
  //   backgroundImage:
  //     "linear-gradient(50deg,#0D1B2A,#1B263B,#415A77,#778DA9,#E0E1DD)",
  // };

  return (
    // <nav className="navbar navbar-light" style={navStyle}>
    <nav className="navbar navbar-expand-md navbar-dark">
      <a
        className="navbar-brand ms-3 fs-2 text-light"
        href="#Home"
        onClick={() => handlePageChange("Home")}
      >
        Alyssa Natividad
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="navbar-collapse collapse justify-content-end"
        id="navbarCollapse"
      >
        <ul className="navbar-nav justify-content">
          <li className="nav-item px-3 fs-3">
            <a
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              href="#About"
              onClick={() => handlePageChange("About")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item px-3 fs-3">
            <a
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item px-3 fs-3">
            <a
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </a>
          </li>
          <li className="nav-item px-3 fs-3">
            <a
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// use useState to keep track which page is selected by the user
import React, { useState } from "react";
// load all the components
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
// load the array of projects
import projects from "../projects";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    // based on the page clicked, load the appropriate component
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        // the array of projects will be passed on to the Portfolio component which would call the project component
        return <Portfolio projects={projects} />;
      case "Resume":
        return <Resume />;
      default:
        // the default page to load is home and this could also be seen when clicking the name on the left part of the navbar
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="cover-container d-flex w-100 h-100 flex-column">
      {/* show the Nav and Footer components regardless of the "main" component shown */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

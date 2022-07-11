import React, { useState } from "react";
import "animate.css";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    console.log(currentPage);
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="cover-container d-flex w-100 h-100 flex-column">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

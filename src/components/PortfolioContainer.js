import React, { useState } from "react";
import Nav from "./Nav";
// import About from "./pages/About";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <Nav />
    </div>
  );
}

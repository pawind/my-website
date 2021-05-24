import React, { useState } from "react";
import LandingPage from "../sites/LandingPage/LandingPage";
import NavBar from "../navigation/NavBar/NavBar";
import "./Website.css";
import SortingVisualition from "../sites/Projects/SortingVisualition/src/App";

const Website = (props) => {
  const [currentPage, setCurrentPage] = useState(<LandingPage />);

  const handleChangePage = (newPageName) => {
    console.log(newPageName);
    //console.log("projects");

    switch (newPageName) {
      case "projects":
        setCurrentPage(<SortingVisualition />);
        break;
      default:
        setCurrentPage(<LandingPage />);
    }
  };

  return (
    <div className="Website">
      <NavBar onPageChange={handleChangePage} />
      <div className="CurrentPageContainer">{currentPage}</div>
    </div>
  );
};

export default Website;

<<<<<<< HEAD
import React, { useState } from 'react'
import LandingPage from "../sites/LandingPage/LandingPage";
import Layout from "../sites/layout/Layout";
import Projects from "../sites/Projects/projects";
=======
import React, { useState } from "react";
import LandingPage from "../sites/LandingPage/LandingPage";
import NavBar from "../navigation/NavBar/NavBar";
>>>>>>> 446a3a0b39484fa2747813cca8fe7095aa489e44
import "./Website.css";
import SortingVisualition from "../sites/Projects/SortingVisualition/src/App";

const Website = (props) => {
<<<<<<< HEAD
   const [currentPageName, setCurrentPageName] = useState("landing");

    const handleSiteChange = (newPage) => {
        console.log(newPage)
        setCurrentPageName(newPage);
        console.log(currentPageName)
    }

        let currentPage = null;
        switch(currentPageName){
            //case ("landing"):
            //      currentPage = <LandingPage />
            //         break;

            case ("projects"):
                currentPage = <Projects/>
                break;

            default:
                currentPage = <LandingPage />
        }

        return (
            <div className="Website">
                <Layout handleSiteChange={handleSiteChange}>
                    {currentPage}
                </Layout>
            </div>
            
        );
        
    
        }
=======
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
>>>>>>> 446a3a0b39484fa2747813cca8fe7095aa489e44

export default Website;

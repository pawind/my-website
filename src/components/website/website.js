import React, { useState } from 'react'
import LandingPage from "../sites/LandingPage/LandingPage";
import Layout from "../sites/layout/Layout";
import Projects from "../sites/Projects/projects";
import "./Website.css";

const Website = (props) => {
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

export default Website;
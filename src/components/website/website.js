import React, { Component } from 'react'
import LandingPage from "../sites/LandingPage/LandingPage";
import Layout from "../sites/layout/Layout";
import "./Website.css";

class Website extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageName: "landing"
        };
    }

    render() {
        const { currentPageName } = this.state;
        let currentPage = null;
        switch(currentPageName){
            //case ("landing"):
            //      currentPage = <LandingPage />
            //         break;
            default:
                currentPage = <LandingPage />
        }
        return (
            <div className="Website">
                <Layout currentPage={currentPage}>
                
                </Layout>
            </div>
            
        );
    }
}

export default Website;
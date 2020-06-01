import React from "react";
import './app.css';

import Header from "../header/header";
import About from "../about/about";
import AboutDetails from "../about-details/about-details";
import FeaturedWorks from "../featured-works/featured-works";
import OurServices from "../our-services/our-services";
import TeamQuotes from "../team-quotes/team-quotes";
import Portfolio from "../portfolio/portfolio";
import SubmitNowForm from "../submit-now-form/submit-now-form";


const App = () => {
    return(
        <>
            <Header/>
            <About/>
            <AboutDetails/>
            <FeaturedWorks/>
            <OurServices/>
            <TeamQuotes/>
            <Portfolio/>
            < SubmitNowForm />
        </>
    )
};

export default App

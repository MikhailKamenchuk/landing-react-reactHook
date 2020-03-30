import React from "react";
import './app.css';

import Header from "../header/header";
import About from "../about/about";
import AboutDetails from "../about-details/about-details";
import FeaturedWorks from "../featured-works/featured-works";
import OurServices from "../our-services/our-services";


const App = () => {
    return(
        <>
            <Header/>
            <About/>
            <AboutDetails/>
            <FeaturedWorks/>
            <OurServices/>
        </>
    )
};

export default App
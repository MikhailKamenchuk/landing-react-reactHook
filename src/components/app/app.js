import React from "react";
import './app.css';

import Header from "../header/header";
import About from "../about/about";
import AboutDetails from "../about-details/about-details";
import FeaturedWorks from "../featured-works/featured-works";
import OurServices from "../our-services/our-services";
import Appp from "../ruby_cromsai/appp/appp";


const App = () => {
    return(
        <>
            <Header/>
            <About/>
            <AboutDetails/>
            <FeaturedWorks/>
            <OurServices/>
            <Appp/>
        </>
    )
};

export default App
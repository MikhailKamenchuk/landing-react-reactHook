import React from "react";
import './app.css';

import Header from "../header/header";
import About from "../about/about";
import AboutDetails from "../about-details/about-details";


const App = () => {
    return(
        <>
            <Header/>
            <About/>
            <AboutDetails/>
        </>
    )
};

export default App
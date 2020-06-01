import React, {useEffect, useState} from "react";

import './portfolio.css';

import * as axios from "axios";
import WorksPreviewList from "./works-preview-list/works-preview-list";

const Portfolio = () => {
    const [trendsList, setTrendsList] = useState([]);
    const [currentTrend, setCurrentTrend] = useState('All works')
    const selectedNavItem = (work, id) => {
        // let currentItem = e.target.key;
            return function() {
                // const targetTag = ;
                // const list = targetTag.parentNode.parentNode.querySelectorAll('.need__selected__control');
                // list.forEach(item => item.style.display = "flex");
                // targetTag.style.display = 'none';
                setCurrentTrend(work)
            }
    };
    useEffect(() => {
        axios.get("./fixtures/portfolio.json")
            .then(res => res.data)
            .then(data => {

                setTrendsList(['All works', ...Object.keys(data[0])])
            })
            .catch(error => new Error(`Could not fetch ` +
                `, received ${error}`))
    }, []);

    return(
        <section className='portfolio'>
            <div className='container'>
                <div className='row '>
                    <div className="col-lg-12 d-flex flex-column align-items-center">
                        <h2 className="portfolio__title">
                            The portfolio
                        </h2>
                        <p className='portfolio__title__description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    </div>
                </div>
                <div className="portfolio__navigation row">
                    <nav className="col-lg-12  ">
                        <ul className=' d-flex justify-content-center'>
                            {
                                trendsList.map((work, idx) => <li key={idx} data-id={work} onClick={selectedNavItem(work)}>{work}</li>)
                            }
                        </ul>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <WorksPreviewList trend={currentTrend}/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Portfolio

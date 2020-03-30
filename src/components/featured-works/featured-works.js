import React from "react";


import {selectedHandler} from '../../utils/index';
import './featured-works.css';
import {Link} from "react-router-dom";

const FeaturedWorks = () => {
    return(
        <section className='featured__works'>
            <div className='container'>
                <div className='featured__works__heading row '>
                    <div className="col-lg-12 d-flex flex-column align-items-center">
                        <h2 className="featured__works__title">
                            Featured Projects
                        </h2>
                        <p className='featured__works__title__description'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        </p>
                    </div>
                </div>
            </div>
            <ul className='featured__works__images__list d-flex'>
                <li className="featured__works__images__list__item col-lg-6 item__01" >
                    <span onClick={selectedHandler} className="shadow need__selected__control">Restyling</span>
                </li>
                <li className="featured__works__images__list__item col-lg-3 item__02" >
                    <span onClick={selectedHandler} className="shadow need__selected__control">Vintage</span>
                </li>
                <li className="featured__works__images__list__item col-lg-3 item__03" >
                    <span onClick={selectedHandler} className="shadow need__selected__control">Branding</span>
                </li>
            </ul>
            <div className="featured__works__footing d-flex">
                <p className="col-lg-9">
                    At vero eos et <b>accusamus</b> et iusto odio dignissimos ducimus qui blanditiis
                </p>
                <div className="submit__button col-lg-3">
                    <Link to='/register' className="cylinder-border">Submit Now</Link>
                </div>
            </div>
        </section>
    )
};

export default FeaturedWorks
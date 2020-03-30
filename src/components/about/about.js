import React from "react";
import {Link} from "react-router-dom";

import ipad from'../../img/ipad.png'
import './about.css';

const About = () => {
    return(
        <section className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='about__text col-lg-8'>
                        <h2 className='about__title'>This is Bouncy</h2>
                        <p className='about__description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</p>
                        <Link to='/about_more' className='about__more'>Read More</Link>
                    </div>
                    <div className='col-lg-4'>
                        <img src={ipad} alt='Ipad'/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About
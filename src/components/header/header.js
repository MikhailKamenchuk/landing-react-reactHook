import React from "react";

import logo from '../../img/logo.png';
import "./header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className='row main__header'>
                    <div className='col-lg-6'>
                        <Link to='/'><img src={logo} alt='Logo'/></Link>
                    </div>
                    <div className='col-lg-6'>
                        <nav>
                            <ul className='menu d-flex justify-content-between'>
                                <li className='menu__item'>
                                    <Link to='/hello' >Hello</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/services'>Services</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='portfolio'>Portfolio</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/team'>Team</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li className='menu__item'>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='title__header row'>
                    <div className='title col-lg-12 d-flex flex-column align-items-center'>
                        <h1 className='title__heading'>
                            We Are Code Cafe
                        </h1>
                        <p className='title__description'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br /> praesentium voluptatum
                        </p>
                    </div>
                </div>
                <div className='header-down-arrow row'>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link to='/contact' className='chevron-down'/>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
import React from "react";

import './team-quotes.css';

const TeamQuotes = () => {
    return (
        <section className='team__quotes'>
            <div className='container'>
                <div className='row '>
                    <article className="col-lg-7 d-flex flex-column align-items-right">
                        <h2 className="team__quotes__article__title">Impressed?</h2>
                        <p className="team__quotes__article">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                        </p>
                        <div className="team__quotes__article__author">
                            <p className="team__quotes__article__author__name bold">
                                Abdullah Noman
                            </p>
                            <p className="team__quotes__article__author__workplace">
                                Created director <span className='highlight'>Code Cafe</span>
                            </p>
                        </div>
                    </article>
                    <div className="team__quotes__monitor__block col-lg-5">
                        <div className="team__quotes__monitor" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default TeamQuotes

import React, {useState} from "react";

import './featured-works.css';

const FeaturedWorks = () => {
    // const[article, selectArticle] = useState(articles[2]);
    return(
        <section className='about__details'>
            <div className='container'>
                <div className='about__details__heading row '>
                    <div className="col-lg-12 d-flex flex-column align-items-center">
                        <h2 className="about__details__title">
                            Details about Bouncy
                        </h2>
                        <p className='about__details__title__description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                        <ul className="about__details__icons_list d-inline-flex">
                            <li className="about__details__icons_list__item heart" onClick={() => {selectArticle(articles[0])}}/>
                            <li className="about__details__icons_list__item mouse" onClick={() => {selectArticle(articles[1])}}/>
                            <li className="about__details__icons_list__item light-bulb" onClick={() => {selectArticle(articles[2])}}/>
                        </ul>
                    </div>
                </div>
                <div className="about__details__selected row d-lex justify-content-space-between">
                    <div className="col-lg-5">
                        <h3 className="about__details__selected_title">{article.title}</h3>
                        <p className='about__details__selected_description'>
                            {article.description}
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <article className='about__details__selected_content'>
                            {article.content}
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FeaturedWorks
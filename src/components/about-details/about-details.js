import React, {useState} from "react";

// import {selectedHandler} from '../../utils/index';
import './about-details.css';

const articles = [
    {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum',
        content: '    In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra,\n'},
    {
        title: 'Kafka',
        description: 'And it\'s a funny sort of business to be sitting up there at your desk, talking down at your subordinates',
        content: 'Doing business like this takes much more effort than doing your own business at home, and on top of that there\'s the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone'},
    {
        title: 'Creative Ideas',
        description: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores`,
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem\n'}
];

const AboutDetails = () => {
    const[article, selectArticle] = useState(articles[2]);
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
                            <li className="about__details__icons_list__item heart need__selected__control" onClick={() => {selectArticle(articles[0])}}/>
                            <li className="about__details__icons_list__item mouse need__selected__control" onClick={() => {selectArticle(articles[1])}}/>
                            <li className="about__details__icons_list__item light-bulb need__selected__control" onClick={() => {selectArticle(articles[2])}}/>
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

export default AboutDetails
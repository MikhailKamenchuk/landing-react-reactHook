import React, {useEffect, useState} from "react";

import './our-services.css';

import * as axios from "axios";
import PercentageCircle from "./percentage-circle/percentage-circle";

const OurServices = () => {
    const [id, setId] = useState(0);
    const [article, setArticle] = useState({});
    const [servicesList, setServicesList] = useState([])
    useEffect(() => {
        axios.get("./fixtures/our-services-list.json")
            .then(res => res.data)
            .then(data => {
                const article = data.find(item => item.id === `${id}`);
                setArticle(article);
                setServicesList(!article.services ? [] : article.services)
            })
            .catch(error => new Error(`Could not fetch ` +
                `, received ${error}`))
    }, [id]);
    return(
        <section className='our__services'>
            <div className='container'>
                <div className='our__services__heading row '>
                    <div className="col-lg-12 d-flex flex-column align-items-center">
                        <h2 className="our__services__title">
                            Our services
                        </h2>
                        <p className='our__services__title__description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    </div>
                </div>
                <div className='our__services__main  row'>
                    <div className="col-lg-6 d-flex justify-content-space-between">
                        <ul className="our__services__icons_list d-flex flex-column">
                            <li className="our__services__icons_list__item tools" data-id='0' onClick={(e) => setId(e.target.getAttribute('data-id'))} />
                            <li className="our__services__icons_list__item design" data-id='1' onClick={(e) => setId(e.target.getAttribute('data-id'))}/>
                            <li className="our__services__icons_list__item games" data-id='2' onClick={(e) => setId(e.target.getAttribute('data-id'))}/>
                            <li className="our__services__icons_list__item support" data-id='3' onClick={(e) => setId(e.target.getAttribute('data-id'))}/>
                        </ul>
                        <article className='our__services__article'>
                            <h2 className="our__services__article__title">
                                {article.title}
                            </h2>
                            <p className="our__services__article__main">
                                {article.description}
                            </p>
                        </article>
                    </div>
                    <div className="our__services__subsections col-lg-6 d-inline-flex align-items-center">
                        {servicesList.map((item, idx) => {
                            return <PercentageCircle key={idx} article={item}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurServices
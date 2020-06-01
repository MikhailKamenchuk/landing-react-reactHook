import React, {useEffect, useState} from "react";
import * as axios from "axios";
import {destructureArrForResponsiveDesign} from "../../../utils";

const WorksPreviewList = ({trend = 'All works'}) => {
    const [worksList, setWorksList] = useState([]);

    useEffect(() => {
        axios.get(`./fixtures/portfolio.json`)
            .then(res => res.data)
            .then(data => {
                const isAllWorks = trend === 'All works';
                const list = isAllWorks
                    ? [].concat.apply([], Object.entries(data[0]).map(item => item[1]))
                    : Object.entries(data[0]).find(item => item[0] === trend)[1];
                setWorksList(list)
            })
            .catch(error => new Error(`Could not fetch ` +
                `, received ${error}`))
    }, [trend]);
    return (
        <div className='images__list__row'>
            {destructureArrForResponsiveDesign(worksList).map((item, idx) => {
                return (
                    <div key={idx} className='images__list__column'>
                        {item.map(
                            image => {
                                return(
                                    <img key={image.id} src={image.previewUrl} alt={image.id}/>
                                )
                            }
                        )}
                    </div>
                )
            })}
        </div>
    )

};

export default WorksPreviewList

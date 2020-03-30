import React from "react";

import './percentage-circle.css';


const PercentageCircle = ({article}) => {
    const{percent, caption} = article;
    const strokeDasharray = `${percent}, 100`;
    return(
        <div className="our__services__subsections__item">
            <div className="single-chart">
                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg"
                          d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                          strokeDasharray={strokeDasharray}
                          d="M18 2.0845
                                          a 15.9155 15.9155 0 0 1 0 31.831
                                          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">{percent}%</text>
                </svg>
            </div>
            <div className="caption">
                {caption}
            </div>
        </div>
    )
};

export default PercentageCircle
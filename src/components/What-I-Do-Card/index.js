import React from "react";

//components
import SvgIcon from "../../components/SvgIcon";

const WhatIDoCard = props => {
    return (
        <div className="what-i-do-card">

            <SvgIcon svgClass={props.svgClass} svgSelection={props.svgSelection} />
            <h2 className="what-i-do-card__heading">
                {props.headingText}
            </h2>
            <p className="what-i-do-card__text">
                {props.text}
            </p>
        </div>
    )
}

export default WhatIDoCard;
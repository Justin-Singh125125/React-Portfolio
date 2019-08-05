import React from "react";

//components
import SvgIcon from "../SvgIcon";



const PortfolioCard = props => {
    return (
        <div onClick={props.handlePopup} className={`portfolio-card portfolio-card--${props.cardNumber}`}>
            <img src={props.img} alt="" className="portfolio-card__img" />

            <SvgIcon svgClass="portfolio-card__icon" svgSelection="icon-search" />
            <h2 className="portfolio-card__project-name">{props.projectName}</h2>


        </div>
    )
}

export default PortfolioCard;
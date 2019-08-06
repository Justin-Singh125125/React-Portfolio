import React from "react";
import Fade from 'react-reveal/Fade';

//components
import SvgIcon from "../SvgIcon";



const PortfolioCard = props => {
    return (
        <Fade bottom duration={2000}>
            <div onClick={props.handlePopup} className={`portfolio-card portfolio-card--${props.cardNumber}`}>
                <img src={props.img} alt="" className="portfolio-card__img" />

                <SvgIcon svgClass="portfolio-card__icon" svgSelection="icon-search" />
                <h2 className="portfolio-card__project-name">{props.projectName}</h2>


            </div>
        </Fade>
    )
}

export default PortfolioCard;
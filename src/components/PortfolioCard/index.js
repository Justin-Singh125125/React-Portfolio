import React from "react";



const PortfolioCard = props => {
    return (
        <div className={`portfolio-card portfolio-card--${props.cardNumber}`}>
            <img src={props.img} alt="" className="portfolio-card__img" />
        </div>
    )
}

export default PortfolioCard;
import React from "react";

const test = props => {
    return (
        <div className="primary-card">
            <h2 className="primary-card__heading">{props.headingText}</h2>
            <h3 className="primary-card__location">{props.locationName}</h3>
            <h4 className="primary-card__year">{props.year}</h4>
            <p className="primary-card__text">{props.text}</p>

            {props.button ? <a className="primary-card__btn btn btn--green" target="_blank" href={props.link}>{props.buttonText}</a> : ""}
        </div>
    )
}

export default test;
import React from "react";

const ProgressBar = props => {


    return (
        <div className="progress-bar">
            <div className="progress-bar__text">
                <h3 className="progress-bar__heading" >{props.headingText}</h3>
                <span className="progress-bar__percentage">{props.percentage}</span>
            </div>

            <div className={props.progressBarClass}>&nbsp;</div>
        </div>
    )
}

export default ProgressBar;
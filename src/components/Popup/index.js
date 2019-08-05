import React from "react";

//photos
import Natours from "../../assets/img/natours.jpg";

import Technologies from "../AboutMe/sub-components/technologies";
const Popup = props => {
    return (
        <div className={props.openPopup ? "popup open" : "popup"} id="popup">

            <div className="popup__content">
                <a onClick={props.handlePopup} href="#section-portfolio" className="popup__close">&times;</a>
                <h2 className="popup__project-name">{props.data.projectName}</h2>

                <p className="popup__text">{props.data.text}</p>

                <Technologies />
                <a href={props.data.link} className="popup__btn btn btn--green" target="_blank">Live Demo</a>

                <img src={props.data.img} alt="" className="popup__img" />
            </div>
        </div>

    )
}

export default Popup;
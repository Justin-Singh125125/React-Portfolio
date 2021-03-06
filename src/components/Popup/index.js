import React from "react";

//photos


import Technologies from "../Technologies";
const Popup = props => {
    return (
        <div className={props.openPopup ? "popup open" : "popup"} id="popup">

            <div className="popup__content">
                <a onClick={props.handlePopup} href="#section-portfolio" className="popup__close">&times;</a>
                <h2 className="popup__project-name">{props.data.projectName}</h2>

                <p className="popup__text">{props.data.text}</p>

                <img src={props.data.img} alt="" className="popup__img" />


                <Technologies technologies={props.data.technologies} />
                <a href={props.data.link} className="popup__btn btn btn--green" target="_blank">Live Demo</a>


            </div>
        </div>

    )
}

export default Popup;
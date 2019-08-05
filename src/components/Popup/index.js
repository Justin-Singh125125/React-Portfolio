import React from "react";

//photos
import Natours from "../../assets/img/natours.jpg";

import Technologies from "../AboutMe/sub-components/technologies";
const Popup = props => {
    return (
        <div className={props.openPopup ? "popup open" : "popup"} id="popup">

            <div className="popup__content">
                <a onClick={props.handlePopup} href="#section-portfolio" className="popup__close">&times;</a>
                <h2 className="popup__project-name">Natours</h2>

                <p className="popup__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?</p>

                <Technologies />
                <a href="#" className="popup__btn btn btn--green">Live Demo</a>

                <img src={Natours} alt="" className="popup__img" />
            </div>
        </div>

    )
}

export default Popup;
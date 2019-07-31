import React from "react";

import AboutMePhoto from "../../assets/img/about-me-picture.png";



const AboutMe = props => {
    return (
        <div className="about-me-image">
            <img src={AboutMePhoto} alt="About Me" className="about-me-image-photo" />
        </div>
    )
}

export default AboutMe;
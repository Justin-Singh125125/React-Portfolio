import React from "react";





const AboutMe = props => {
    return (
        <div className="about-me-image">
            <img src={props.img} alt="About Me" className="about-me-image-photo" />
        </div>
    )
}

export default AboutMe;
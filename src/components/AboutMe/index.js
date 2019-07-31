import React from "react";

//sub-components
import Technologies from "./sub-components/technologies";

//Resume
import Resume from "../../assets/img/Singh, Justin.pdf";
const AboutMe = props => {
    return (
        <div className="about-me">
            <h2 className="about-me__text">About Me</h2>
            <p className="about-me__info">
                Hello, I am a certified Full Stack Web Developer with a background in Computer Science and a lifelong dedication to learning.
                I am experienced in the technologies found below!
            </p>

            <Technologies />


            <a className="about-me__btn" href={Resume} download>
                Download Resume
            </a>
        </div>
    )
}

export default AboutMe;
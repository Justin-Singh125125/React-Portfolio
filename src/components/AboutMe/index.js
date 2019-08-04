import React from "react";

//components
import SvgIcon from "../../components/SvgIcon";

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


            <div className="about-me__btn-section">


                <a id="center" className="test btn btn--green" href={Resume} download>
                    Download Resume  <SvgIcon svgClass="about-me__btn-icon" svgSelection="icon-download3" />
                </a>
            </div>

        </div>
    )
}

export default AboutMe;
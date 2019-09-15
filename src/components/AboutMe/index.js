import React from "react";

import Fade from 'react-reveal/Fade';


//components
import SvgIcon from "../../components/SvgIcon";
import Technologies from "../../components/Technologies";

//Resume
import Resume from "../../assets/img/Singh, Justin.pdf";


const AboutMe = props => {
    return (
        <Fade right duration={1500}>
            <div className="about-me">
                <h2 className="about-me__text">About Me</h2>
                <p className="about-me__info">
                    Hello, I am certified Full Stack Web Developer with a background in Computer Science.
                    I specialize in using the MERN Stack and I am experienced in the technologies found below! When I am free, I value time with friends and family. When I am not spending time
                    with them I also like to continuously educate myself with new technologies because I love to learn. I feel that there is always a way for someone to improve themselves and I
                    find that I can continusously improve myself through my passion for learning.

                </p>

                <Technologies technologies={["C++", "Javascript", "HTML", "CSS", "Express", "React", "MongoDB", "MySQL"]} />
                <div className="about-me__btn-section">
                    <a id="center" className="test btn btn--green" href={Resume} download>
                        Download Resume  <SvgIcon svgClass="about-me__btn-icon" svgSelection="icon-download3" />
                    </a>
                </div>

            </div>
        </Fade>
    )
}

export default AboutMe;
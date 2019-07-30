import React from "react";

//sub-components
import Technologies from "./sub-components/technologies";
const AboutMe = props => {
    return (
        <div className="about-me">
            <h2 className="about-me__text">About Me</h2>
            <p className="about-me__info">
                Hello, I am a certified Full Stack Web Developer with a background in Computer Science and a lifelong dedication to learning. I am effective at combining creativity and problem-solving techniques to help develop user-friendly applications. Known among colleagues for implementing quality decisions into projects that reflect integrity to the client. I am pursuing a Masters degree in Computer Science.
                I am experienced in the technologies found below!
            </p>

            <Technologies />
        </div>
    )
}

export default AboutMe;
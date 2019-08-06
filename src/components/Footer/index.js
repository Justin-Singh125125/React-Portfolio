import React from "react";

//components
import Technolgies from "../Technologies";

const Footer = props => {
    return (
        <div className="footer">
            <div className="footer__text-section">
                <p className="footer__text">&copy; Copyright 2019 by Justin Singh</p>
                <p className="footer__inspiration">Inspiration for design: <a className="footer__link" href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-one-w.html">Here</a></p>
            </div>

            <div className="footer__built-with-secction">
                <p className="footer__built-with">Built with:</p>
                <Technolgies technologies={["React", "SASS", "CSS Grid", "Flexbox"]} />
            </div>

        </div>
    )
}

export default Footer;
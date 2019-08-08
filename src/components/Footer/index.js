import React from "react";

import Fade from 'react-reveal/Fade';


//components
import Technolgies from "../Technologies";

const Footer = props => {
    return (
        <Fade bottom duration={2000}>
            <div className="footer">
                <div className="footer__text-section">
                    <p className="footer__text">&copy; Copyright 2019 by Justin Singh</p>
                </div>

                <div className="footer__built-with-secction">
                    <p className="footer__built-with">Built with:</p>
                    <Technolgies technologies={["React", "SASS", "CSS Grid", "Flexbox"]} />
                </div>

            </div>
        </Fade>
    )
}

export default Footer;
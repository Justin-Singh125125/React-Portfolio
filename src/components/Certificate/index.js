import React from "react";

//components

import Fade from 'react-reveal/Fade';


const Certificate = props => {
    return (

        <Fade left duration={1500}>
            <div className="certificate">

                <img className="certificate__img" src="https://credlyapp.s3.amazonaws.com/badges/aa57dc61c96a888ea204005ab7ef7028.png" alt="Justin Singh's Certificate" />
                <h2 className="certificate__heading">Full Stack Web Developer</h2>
                <h3 className="certificate__sub-heading">UC Davis Division of Continuing and Professional Education</h3>
                <h5 className="certificate__name"> <span className="certificate__recipient">Recipient: </span> Justin Singh</h5>
                <h5 className="certificate__date"><span className="certificate__issued">  Issued: &nbsp;&nbsp;&nbsp;&nbsp;</span>4/8/2019</h5>
                <a href="https://ucdavis.credly.com/member-badges/17347457" className="certificate__link btn btn--green" target="_blank">View Certificate</a>

            </div >
        </Fade>

    )
}

export default Certificate;
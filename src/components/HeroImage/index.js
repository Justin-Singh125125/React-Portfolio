import React from "react";

import Bounce from 'react-reveal/Bounce';

//photos
import Hero from "../../assets/img/test.jpeg"

const HeroImage = props => {
    return (
        <>
            <Bounce right duration={2000}>
                <div className="hero">
                    <img src={Hero} alt="Justin Singh" className="hero__img" />

                </div>
                <div className="hero__border--1">&nbsp;</div>
                <div className="hero__border--2">&nbsp;</div>

            </Bounce>

        </>

    )
}

export default HeroImage;
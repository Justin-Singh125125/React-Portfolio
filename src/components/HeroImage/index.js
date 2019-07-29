import React from "react";

//photos
import Hero from "../../assets/img/me.png"

const HeroImage = props => {
    return (
        <>
            <div className="hero">
                <img src={Hero} alt="Justin Singh" className="hero__img" />
            </div>
            <div className="hero__border">&nbsp;</div>
        </>

    )
}

export default HeroImage;
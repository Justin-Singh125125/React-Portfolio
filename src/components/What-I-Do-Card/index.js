import React from "react";

const WhatIDoCard = props => {
    return (
        <div className="what-i-do-card">
            <h2 className="what-i-do-card__heading">
                {props.headingText}
            </h2>
            <p className="what-i-do-card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid hic voluptatum quam temporibus, ipsa atque nemo et libero, pariatur, quibusdam tenetur quia laboriosam commodi porro corporis excepturi incidunt obcaecati!
            </p>
        </div>
    )
}

export default WhatIDoCard;
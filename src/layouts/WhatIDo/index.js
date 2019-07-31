import React from "react";

const WhatIDo = props => {
    return (
        <section className="section-what-i-do">

            <h2 className="section-what-i-do__heading">
                What I Do
        </h2>
            {props.children}

        </section>
    )
}

export default WhatIDo;
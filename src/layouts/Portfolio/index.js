import React from "react";

const Portfolio = props => {
    return (


        <section className="section-portfolio">
            <h2 className="section-portfolio__heading">Portfolio</h2>
            {props.children}

        </section>
    )

}

export default Portfolio;
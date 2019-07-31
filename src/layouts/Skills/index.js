import React from "react";

const Skills = props => {
    return (

        <section className="section-skills">
            <h2 className="section-skills__technical">Technical Skills</h2>
            {props.children}
        </section>
    )
}

export default Skills;
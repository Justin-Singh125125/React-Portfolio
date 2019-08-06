import React from "react";

const SectionEducation = props => {
    return (
        <div id="experience" className="section-education">
            <h2 className="section-education__heading">
                Education
            </h2>
            {props.children}
        </div>
    )
}

export default SectionEducation;
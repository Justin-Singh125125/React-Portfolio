import React from "react";

import Bounce from 'react-reveal/Bounce';

const SectionEducation = props => {
    return (
        <Bounce left duration={1500}>
            <div id="experience" className="section-education">
                <h2 className="section-education__heading">
                    Education
            </h2>
                {props.children}
            </div>
        </Bounce>
    )
}

export default SectionEducation;
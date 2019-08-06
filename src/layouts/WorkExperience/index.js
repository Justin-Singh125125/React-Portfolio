import React from "react";

import Bounce from 'react-reveal/Bounce';


const WorkExperience = props => {
    return (
        <Bounce right duration={1500}>
            <div className="section-work-experience">

                <h2 className="section-work-experience__heading">
                    Work Experience
            </h2>
                {props.children}
            </div>
        </Bounce>
    )
}

export default WorkExperience;
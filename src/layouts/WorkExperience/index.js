import React from "react";

const WorkExperience = props => {
    return (

        <div className="section-work-experience">

            <h2 className="section-work-experience__heading">
                Work Experience
            </h2>
            {props.children}
        </div>
    )
}

export default WorkExperience;
import React from "react";

const Technologies = props => {
    return (
        <div className="technologies">
            {props.technologies ? props.technologies.map(tech => (
                <p>{tech}</p>
            )) :
                ""
            }
        </div>
    )
}

export default Technologies;
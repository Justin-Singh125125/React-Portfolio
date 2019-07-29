import React from "react";

const Hello = props => {
    return (
        <div className="hello">
            <h5 className="hello__im">Hello I'm</h5>
            <h2 className="hello__name">Justin Singh</h2>
            <h3 className="hello__stack">Full Stack Web Developer</h3>
            <h6 className="hello__email">Justin.Singh125125@gmail.com</h6>
            <h6 className="hello__number">(916)-955-8073</h6>
            <div className="hello__icons">
                {/* <span className="hello__icons--github">Github</span>
                <span className="hello__icons--Linkedin">LinkedIn</span> */}
            </div>

        </div>
    )
}

export default Hello;
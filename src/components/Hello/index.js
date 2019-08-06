import React from "react";
import Slide from 'react-reveal/Slide';

//components
import SvgIcon from "../SvgIcon";


const Hello = props => {
    return (
        <div className="hello">

            <Slide left duration={1000}>
                <h5 className="hello__im">Hello I'm</h5>


                <h2 className="hello__name">Justin Singh</h2>
                <h3 className="hello__stack">Full Stack Web Developer</h3>
            </Slide>

            <a className="hello__link" href="mailto:justin.singh125125@gmail.com">

                <Slide right duration={1000}>
                    <h6 className="hello__email">
                        <SvgIcon svgClass="hello__icon hello__email-icon" svgSelection="icon-envelop" />Justin.Singh125125@gmail.com
                        </h6>
                </Slide>

            </a>


            <a className="hello__link" href="tel:9169558073">
                <Slide right duration={1000}>
                    <h6 className="hello__number">
                        <SvgIcon svgClass="hello__icon hello__phone-icon" svgSelection="icon-phone" />(916)-955-8073
                    </h6>
                </Slide>
            </a>
            <Slide left duration={1000}>
                <div className="hello__icons">
                    <div className="hello__icons--1">
                        <a href="https://github.com/Justin-Singh125125" target="_blank">
                            <SvgIcon svgClass="hello__icon hello__github-icon" svgSelection="icon-github" />
                        </a>
                    </div>
                    <div className="hello__icons--2">
                        <a href="https://www.linkedin.com/in/justin-singh-70a147178" target="_blank">
                            <SvgIcon svgClass="hello__icon hello__linkedin-icon" svgSelection="icon-linkedin" />
                        </a>
                    </div>
                </div>
            </Slide>

        </div >
    )
}

export default Hello;
import React from "react";
import Fade from 'react-reveal/Fade';

//components
import SvgIcon from "../SvgIcon";


const Hello = props => {
    return (

        <div className="hello">

            <Fade left duration={1500}>
                <h5 className="hello__im">Hello I'm</h5>


                <h2 className="hello__name">Justin Singh</h2>
                <h3 className="hello__stack">Full Stack Web Developer</h3>
            </Fade>

            <a className="hello__link" href="mailto:justin.singh125125@gmail.com">

                <Fade right duration={1500}>
                    <h6 className="hello__email">
                        <SvgIcon svgClass="hello__icon hello__email-icon" svgSelection="icon-envelop" />Justin.Singh125125@gmail.com
                        </h6>
                </Fade>

            </a>


            <a className="hello__link" href="tel:9169558073">
                <Fade right duration={1500}>
                    <h6 className="hello__number">
                        <SvgIcon svgClass="hello__icon hello__phone-icon" svgSelection="icon-phone" />(916)-955-8073
                    </h6>
                </Fade>
            </a>

            <div className="hello__icons">

                <div className="hello__icons--1">
                    <a href="https://github.com/Justin-Singh125125" target="_blank">
                        <Fade left duration={1500}>
                            <SvgIcon svgClass="hello__icon hello__github-icon" svgSelection="icon-github" />
                        </Fade>
                    </a>
                </div>

                <div className="hello__icons--2">

                    <a href="https://www.linkedin.com/in/justin-singh-70a147178" target="_blank">
                        <Fade left duration={1500}>
                            <SvgIcon svgClass="hello__icon hello__linkedin-icon" svgSelection="icon-linkedin" />
                        </Fade>
                    </a>

                </div>
                <div className="hello__icons--3">

                    <a href="https://sourcerer.io/justin-singh125125" target="_blank">
                        <Fade left duration={1500}>
                            <SvgIcon svgClass="hello__icon hello__linkedin-icon" svgSelection="icon-power" />
                        </Fade>
                    </a>

                </div>

            </div>


        </div >
    )
}

export default Hello;
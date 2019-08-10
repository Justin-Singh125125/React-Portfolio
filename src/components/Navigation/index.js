import React from "react";

const Navigation = props => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={props.openNavigation} onClick={props.handleNavigation} />

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" onClick={props.handleNavigation}><a href="#about-me" className="navigation__link">About Me</a></li>
                    <li className="navigation__item" onClick={props.handleNavigation}><a href="#experience" className="navigation__link">my experience</a></li>
                    <li className="navigation__item" onClick={props.handleNavigation}><a href="#portfolio" className="navigation__link">portfolio</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default Navigation;
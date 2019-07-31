import React from "react";

import SvgIcons from "../../assets/img/SVG/sprite.svg";

const SvgIcon = (props) => {
    return (
        <svg className={props.svgClass}>
            {/* a little trick to load in svg items */}
            <use xlinkHref={`${SvgIcons}#${props.svgSelection}`} />
        </svg>
    )
}

export default SvgIcon;
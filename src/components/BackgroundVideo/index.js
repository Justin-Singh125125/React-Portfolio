import React from "react";


//videos

import Video_1 from "../../assets/img/Words.mp4";
import Video_2 from "../../assets/img/pencil_down.mp4";
import Video_3 from "../../assets/img/Workaholic.mp4";

const BackgroundVideo = props => {

    console.log(props.videoNumber);
    return (
        <div className="bg-video">

            {props.videoNumber === 1 ?
                <video className="bg-video__content" autoPlay loop>
                    <source src={Video_1} type="video/mp4" />

                </video>
                : ""}
            {props.videoNumber === 2 ?
                <video className="bg-video__content" autoPlay loop>
                    <source src={Video_2} type="video/mp4" />

                </video>
                : ""}
            {props.videoNumber === 3 ?
                <video className="bg-video__content" autoPlay loop>
                    <source src={Video_3} type="video/mp4" />

                </video>
                : ""}

        </div>
    )
}

export default BackgroundVideo;
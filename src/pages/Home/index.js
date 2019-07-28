import React from "react";

//layouts
import Introduction from "../../layouts/Introduction";

//components
import BackgroundVideo from "../../components/BackgroundVideo";





class Home extends React.Component {

    state = {
        videoNumber: 1
    }

    componentDidMount() {

        this.handleBackgroundVideoTimer();
    }




    handleBackgroundVideoTimer = () => {

        let currentVideoNumber = this.state.videoNumber;
        let nextVideoNumber = 0;

        if (currentVideoNumber === 1) {
            nextVideoNumber = 2;
        }
        if (currentVideoNumber === 2) {
            nextVideoNumber = 3;
        }
        if (currentVideoNumber === 3) {
            nextVideoNumber = 1;
        }


        setTimeout(function () {
            this.setState({
                videoNumber: nextVideoNumber
            }, () => {
                this.handleBackgroundVideoTimer();
            })
        }.bind(this),
            8000);
    }


    render() {


        return (
            <Introduction>
                <BackgroundVideo videoNumber={this.state.videoNumber} />
            </Introduction>
        );
    }
}

export default Home;
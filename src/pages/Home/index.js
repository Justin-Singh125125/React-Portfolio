import React from "react";

//layouts
import Grid from "../../layouts/Grid";
import SectionIntroduction from "../../layouts/Introduction";

//components






class Home extends React.Component {


    render() {


        return (
            <Grid>
                <SectionIntroduction>
                    Intro
                </SectionIntroduction>
            </Grid>

        );
    }
}

export default Home;
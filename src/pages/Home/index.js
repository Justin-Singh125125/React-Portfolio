import React from "react";

//layouts
import Grid from "../../layouts/Grid";
import SectionIntroduction from "../../layouts/Introduction";
import SectionAboutMe from "../../layouts/AboutMe";
import SectionWhatIDo from "../../layouts/WhatIDo";
import SectionSkills from "../../layouts/Skills";
import SectionExperience from "../../layouts/Experience";
import SectionPortfolio from "../../layouts/Portfolio";
import SectionContact from "../../layouts/Contact";

//components
import Hello from "../../components/Hello";
import Hero from "../../components/HeroImage";
import Navigation from "../../components/Navigation";






class Home extends React.Component {


    render() {


        return (
            <Grid>
                <Navigation />
                <SectionIntroduction>
                    <Hello />
                    <Hero />
                </SectionIntroduction>
                <SectionAboutMe>
                    About Me
                </SectionAboutMe>
                <SectionWhatIDo>
                    What I do
                </SectionWhatIDo>
                <SectionSkills>
                    my Skills
                </SectionSkills>
                <SectionExperience>
                    my experience
                </SectionExperience>
                <SectionPortfolio>
                    Portfolio
                </SectionPortfolio>
                <SectionContact>
                    Contact me
                </SectionContact>
            </Grid>

        );
    }
}

export default Home;
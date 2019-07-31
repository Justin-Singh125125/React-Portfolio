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
import AboutMeImage from "../../components/AboutMeImage";
import AboutMe from "../../components/AboutMe";
import WhatIDoCard from "../../components/What-I-Do-Card";






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
                    <AboutMeImage />
                    <AboutMe />
                </SectionAboutMe>
                <SectionWhatIDo>
                    <WhatIDoCard headingText="UI Design" svgClass="what-i-do-card__icon what-i-do-card__icon--1" svgSelection="icon-feed" />
                    <WhatIDoCard headingText="Web Development" svgClass="what-i-do-card__icon what-i-do-card__icon--2" svgSelection="icon-embed2" />
                    <WhatIDoCard headingText="Database Management" svgClass="what-i-do-card__icon what-i-do-card__icon--3" svgSelection="icon-database" />
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
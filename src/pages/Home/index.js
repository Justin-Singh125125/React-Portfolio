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
import SectionEducation from "../../layouts/Education";
import SectionWorkExperience from "../../layouts/WorkExperience";


//components
import Hello from "../../components/Hello";
import Hero from "../../components/HeroImage";
import Navigation from "../../components/Navigation";
import AboutMeImage from "../../components/AboutMeImage";
import AboutMe from "../../components/AboutMe";
import WhatIDoCard from "../../components/What-I-Do-Card";
import PrimaryCard from "../../components/PrimaryCard";
import Certificate from "../../components/Certificate";


//photos
// import AboutMePhoto from "../../assets/img/about-me-picture.png";
import AboutMePhoto from "../../assets/img/about-me-picture.png";
import skillPhoto from "../../assets/img/skills.jpg";





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
                <Certificate/>
                <AboutMe />
                </SectionAboutMe>
                <SectionWhatIDo>
                    <WhatIDoCard 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid hic voluptatum quam temporibus, ipsa atque nemo et libero, pariatur, quibusdam tenetur quia laboriosam commodi porro corporis excepturi incidunt obcaecati!"
                    headingText="UI Design" svgClass="what-i-do-card__icon what-i-do-card__icon--1" svgSelection="icon-feed" />
                    <WhatIDoCard 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid hic voluptatum quam temporibus, ipsa atque nemo et libero, pariatur, quibusdam tenetur quia laboriosam commodi porro corporis excepturi incidunt obcaecati!"
                    headingText="Web Development" svgClass="what-i-do-card__icon what-i-do-card__icon--2" svgSelection="icon-embed2" />
                    <WhatIDoCard 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid hic voluptatum quam temporibus, ipsa atque nemo et libero, pariatur, quibusdam tenetur quia laboriosam commodi porro corporis excepturi incidunt obcaecati!"
                    headingText="Database Management" svgClass="what-i-do-card__icon what-i-do-card__icon--3" svgSelection="icon-database" />
                </SectionWhatIDo>
                <SectionEducation>
                    <PrimaryCard
                        headingText="Computer Science"
                        locationName="American River College"
                        year="2017 - 2020"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid hic voluptatum quam temporibus, ipsa atque nemo et libero, pariatur, quibusdam tenetur quia laboriosam commodi porro corporis excepturi incidunt obcaecati!"
                    />
                    <PrimaryCard
                        headingText="Full Stack Web Development"
                        locationName="University of California, Davis"
                        year="2018 - 2019"
                        text="

                        An intensive 24-week long boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handlebars JS, & React Js. "
                    />
                </SectionEducation>
                <SectionWorkExperience>
                    <PrimaryCard
                        headingText="Mapbox Conversion"
                        locationName="Freelance"
                        year="2019 - 2019"
                        text="Contributed to the conversion of a wordpress site to have JQuery Functionality. Implemented Mapbox API to render locations nearest to the user"
                        link={true}
                    />
                </SectionWorkExperience>
            </Grid>

        );
    }
}

export default Home;
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
import AboutMe from "../../components/AboutMe";
import WhatIDoCard from "../../components/What-I-Do-Card";
import PrimaryCard from "../../components/PrimaryCard";
import Certificate from "../../components/Certificate";
import PortfolioCard from "../../components/PortfolioCard";



//photos
import Scrape from "../../assets/img/scrape.jpg";
import MemeBattles from "../../assets/img/meme-battles.jpg";
import BoredAndFree from "../../assets/img/bored-and-free.jpg";
import Natours from "../../assets/img/natours.jpg";
import Trillo from "../../assets/img/trillo.jpg";
import Nexter from "../../assets/img/nexter.jpg";
import Trivia from "../../assets/img/trivia.jpg";





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

                <SectionPortfolio>
                    <PortfolioCard img={Natours} cardNumber="1"/>
                    <PortfolioCard img={MemeBattles} cardNumber="2"/>
                    <PortfolioCard img={BoredAndFree} cardNumber="3"/>
                    <PortfolioCard img={Trillo} cardNumber="4"/>
                    <PortfolioCard img={Trivia} cardNumber="5"/>
                    <PortfolioCard img={Nexter} cardNumber="6"/>
                    <PortfolioCard img={Trivia} cardNumber="7"/>
                    <PortfolioCard img={Scrape} cardNumber="8"/>
                    <PortfolioCard img={Scrape} cardNumber="9"/>
                </SectionPortfolio>
            </Grid>

        );
    }
}

export default Home;
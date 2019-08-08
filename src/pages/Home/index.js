import React from "react";
import Fade from 'react-reveal/Fade';




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
import Popup from "../../components/Popup";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";


//photos
import Scrape from "../../assets/img/scrape.jpg";
import MemeBattles from "../../assets/img/meme-battles.jpg";
import BoredAndFree from "../../assets/img/bored-and-free.jpg";
import Natours from "../../assets/img/natours.jpg";
import Trillo from "../../assets/img/trillo.jpg";
import Nexter from "../../assets/img/nexter.jpg";
import Trivia from "../../assets/img/trivia.jpg";
import Activ8 from "../../assets/img/activ8.jpg";
import Burger from "../../assets/img/burgers.jpg";





class Home extends React.Component {


    state = {
        openPopup: false,

        currentPopupData: "",

        portfolioArray: [
            {
                projectName: "Natours",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "SASS"],
                img: Natours,
                link: "https://natours-wilderness.netlify.com/"
            },
            {
                projectName: "Meme Battles",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "Javascript", "Node", "Express", "MySQL", "Handlebars", "Passport"],
                img: MemeBattles,
                link: "https://bit.ly/2RlQ8UX"
            },
            {
                projectName: "Bored and Free",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "Javascript", "Firebase"],
                img: BoredAndFree,
                link: "https://ewu2.github.io/bored-af/index.html"
            },
            {
                projectName: "Trillo",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "React", "SASS", "Flexbox"],
                img: Trillo,
                link: "https://trillo-app-125125.netlify.com/"
            },
            {
                projectName: "Trivia Game",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "Javascript"],
                img: Trivia,
                link: "https://justin-singh125125.github.io/Trivia-Game/"
            },
            {
                projectName: "Nexter",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "React", "SASS", "CSS Grid"],
                img: Nexter,
                link: "https://nexter-realtor.netlify.com/"
            },
            {
                projectName: "Activ8",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "Javascript", "React", "Node", "Express", "MongoDB", "Passport"],
                img: Activ8,
                link: "https://activ8125125.herokuapp.com/"
            },
            {
                projectName: "Article Scraper",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "Javascript", "Node", "Express", "Handlebars", "MongoDB", "Passport"],
                img: Scrape,
                link: "https://web-scraper125125.herokuapp.com/"
            },
            {
                projectName: "Sequelized Burger",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ullam quo asperiores nesciunt quidem possimus a tempora animi consequuntur doloremque expedita deserunt consectetur, quasi nulla praesentium odio natus reprehenderit nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem repudiandae doloremque vitae? Placeat reiciendis fugiat numquam doloribus dolores aliquam voluptatem explicabo veniam minus saepe exercitationem ipsum earum, officiis aspernatur?",
                technologies: ["HTML", "CSS", "Javascript", "Node", "Express", "Handlebars", "MySQL", "Sequelize", "Passport"],
                img: Burger,
                link: "https://sequelized-burger125125.herokuapp.com/"
            }
        ]
    }



    handlePopup = (projectName) => {
        if (this.state.openPopup) {


            this.setState({ openPopup: false })

        }
        else {
            if (projectName === "Natours") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[0]
                })
            }
            if (projectName === "Meme Battles") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[1]
                })
            }
            if (projectName === "Bored and Free") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[2]
                })
            }
            if (projectName === "Trillo") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[3]
                })
            }
            if (projectName === "Trivia Game") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[4]
                })
            }
            if (projectName === "Nexter") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[5]
                })
            }
            if (projectName === "Activ8") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[6]
                })
            }
            if (projectName === "Article Scraper") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[7]
                })
            }
            if (projectName === "Sequelized Burger") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.portfolioArray[8]
                })
            }

        }
    }



    render() {


        return (
            <Grid>
                <Navigation />
                <SectionIntroduction>
                    <Hello />
                    <Hero />
                </SectionIntroduction>
                <SectionAboutMe>
                    <Fade left duration={1500}>
                        <Certificate />
                    </Fade>
                    <AboutMe />
                </SectionAboutMe>

                <SectionEducation>
                    <PrimaryCard
                        headingText="Computer Science"
                        locationName="Sacramento State University, California"
                        year="2020 - Present"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid hic voluptatum quam temporibus, ipsa atque nemo et libero, pariatur, quibusdam tenetur quia laboriosam commodi porro corporis excepturi incidunt obcaecati!"
                    />

                    <PrimaryCard
                        headingText="Full Stack Web Development"
                        locationName="University of California, Davis"
                        year="2018 - 2019"
                        text="An intensive 24-week long boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handlebars JS, & React Js. "
                        button={true}
                        buttonText="View Certificate"
                        link="https://ucdavis.credly.com/member-badges/17347457"

                    />
                    <PrimaryCard
                        headingText="Computer Science"
                        locationName="American River College"
                        year="2017 - 2019"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid hic voluptatum quam temporibus, ipsa atque nemo et libero, pariatur, quibusdam tenetur quia laboriosam commodi porro corporis excepturi incidunt obcaecati!"
                    />
                </SectionEducation>
                <SectionWorkExperience>
                    <PrimaryCard
                        headingText="Programming Bootcamp Teacher Assistant at UC Davis Continuing and Professional Education"
                        locationName="Trilogy"
                        year="2019 - Present"
                        text="Ensure students reach Full Stack Developer status through an intensive 6-month boot camp course"


                    />
                    <PrimaryCard
                        headingText="Mapbox Conversion"
                        locationName="Freelance"
                        year="2019"
                        text="Contributed to the conversion of a wordpress site to have JQuery Functionality. Implemented Mapbox API to render locations nearest to the user"
                        button={true}
                        buttonText="View Website"
                        link="https://www.ppochildrens.org/locate-a-practice/"


                    />
                </SectionWorkExperience>
                <SectionPortfolio>
                    <PortfolioCard handlePopup={() => this.handlePopup("Natours")} projectName="Natours" img={Natours} cardNumber="1" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Meme Battles")} projectName="Meme Battles" img={MemeBattles} cardNumber="2" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Bored and Free")} projectName="Bored and Free" img={BoredAndFree} cardNumber="3" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Trillo")} projectName="Trillo" img={Trillo} cardNumber="4" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Trivia Game")} projectName="Trivia Game" img={Trivia} cardNumber="5" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Nexter")} projectName="Nexter" img={Nexter} cardNumber="6" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Activ8")} projectName="Activ8" img={Activ8} cardNumber="7" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Article Scraper")} projectName="Article Scraper" img={Scrape} cardNumber="8" />
                    <PortfolioCard handlePopup={() => this.handlePopup("Sequelized Burger")} projectName="Sequelized Burger" img={Burger} cardNumber="9" />
                </SectionPortfolio>


                <Footer />

                <Popup data={this.state.currentPopupData} openPopup={this.state.openPopup} handlePopup={this.handlePopup} />


            </Grid>





        );
    }
}

export default Home;
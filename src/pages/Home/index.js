import React from "react";

//layouts
import Grid from "../../layouts/Grid";
import SectionIntroduction from "../../layouts/Introduction";
import SectionAboutMe from "../../layouts/AboutMe";
import SectionPortfolio from "../../layouts/Portfolio";
import SectionEducation from "../../layouts/Education";
import SectionWorkExperience from "../../layouts/WorkExperience";

//components
import Hello from "../../components/Hello";
import Hero from "../../components/HeroImage";
import Navigation from "../../components/Navigation";
import AboutMe from "../../components/AboutMe";
import PrimaryCard from "../../components/PrimaryCard";
import Certificate from "../../components/Certificate";
import PortfolioCard from "../../components/PortfolioCard";
import Popup from "../../components/Popup";
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

//json data 
import EducationData from "../../assets/json/education.json";
import WorkExperience from "../../assets/json/workExperience.json";

class Home extends React.Component {


    state = {
        openNavigation: false,
        //boolean for the pop up
        openPopup: false,

        //controls which popup data to insert
        currentPopupData: "",

        //education primary card data from json file
        educationData: EducationData,

        //work experience primary card data from json file
        workExperienceData: WorkExperience,

        //pop up data to put in when clicked
        popupData: [
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
        ],
        portfolioCardData: [
            {
                handlePopup: () => this.handlePopup("Natours"),
                projectName: "Natours",
                img: Natours,
                cardNumber: "1"
            },
            {
                handlePopup: () => this.handlePopup("Meme Battles"),
                projectName: "Meme Battles",
                img: MemeBattles,
                cardNumber: "2"
            },
            {
                handlePopup: () => this.handlePopup("Bored and Free"),
                projectName: "Bored and Free",
                img: BoredAndFree,
                cardNumber: "3"
            },
            {
                handlePopup: () => this.handlePopup("Trillo"),
                projectName: "Trillo",
                img: Trillo,
                cardNumber: "4"
            },
            {
                handlePopup: () => this.handlePopup("Trivia Game"),
                projectName: "Trivia Game",
                img: Trivia,
                cardNumber: "5"
            },
            {
                handlePopup: () => this.handlePopup("Nexter"),
                projectName: "Nexter",
                img: Nexter,
                cardNumber: "6"
            },
            {
                handlePopup: () => this.handlePopup("Activ8"),
                projectName: "Activ8",
                img: Activ8,
                cardNumber: "7"
            },
            {
                handlePopup: () => this.handlePopup("Article Scraper"),
                projectName: "Article Scraper",
                img: Scrape,
                cardNumber: "8"
            },
            {
                handlePopup: () => this.handlePopup("Sequelized Burger"),
                projectName: "Sequelized Burger",
                img: Burger,
                cardNumber: "9"
            },

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
                    currentPopupData: this.state.popupData[0]
                })
            }
            if (projectName === "Meme Battles") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[1]
                })
            }
            if (projectName === "Bored and Free") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[2]
                })
            }
            if (projectName === "Trillo") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[3]
                })
            }
            if (projectName === "Trivia Game") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[4]
                })
            }
            if (projectName === "Nexter") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[5]
                })
            }
            if (projectName === "Activ8") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[6]
                })
            }
            if (projectName === "Article Scraper") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[7]
                })
            }
            if (projectName === "Sequelized Burger") {
                this.setState({
                    openPopup: true,
                    currentPopupData: this.state.popupData[8]
                })
            }

        }
    }

    //opens navigation menu
    handleNavigation = () => {
        if (this.state.openNavigation === false) {
            this.setState({
                openNavigation: true
            })
        }
        else {
            this.setState({
                openNavigation: false
            })
        }
    }



    render() {


        return (
            <Grid>
                <Navigation
                    openNavigation={this.state.openNavigation}
                    handleNavigation={this.handleNavigation}
                />

                <SectionIntroduction>
                    <Hello />
                    <Hero />
                </SectionIntroduction>

                <SectionAboutMe>
                    <Certificate />
                    <AboutMe />
                </SectionAboutMe>

                <SectionEducation>
                    {this.state.educationData.map((data => (
                        <PrimaryCard
                            headingText={data.headingText}
                            locationName={data.locationName}
                            year={data.year}
                            text={data.text}
                            button={data.button ? data.button : false}
                            buttonText={data.buttonText ? data.buttonText : false}
                            link={data.link ? data.link : null}
                        />
                    )))}
                </SectionEducation>

                <SectionWorkExperience>
                    {this.state.workExperienceData.map((data => (
                        <PrimaryCard
                            headingText={data.headingText}
                            locationName={data.locationName}
                            year={data.year}
                            text={data.text}
                            button={data.button ? data.button : false}
                            buttonText={data.buttonText ? data.buttonText : false}
                            link={data.link ? data.link : null}
                        />
                    )))}
                </SectionWorkExperience>

                <SectionPortfolio>
                    {this.state.portfolioCardData.map((data => (
                        <PortfolioCard
                            handlePopup={data.handlePopup}
                            projectName={data.projectName}
                            img={data.img}
                            cardNumber={data.cardNumber}
                        />
                    )))}
                </SectionPortfolio>


                <Footer />

                <Popup data={this.state.currentPopupData} openPopup={this.state.openPopup} handlePopup={this.handlePopup} />


            </Grid>





        );
    }
}

export default Home;
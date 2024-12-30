import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { NavLink as ReactLink } from "react-router-dom"
import { Heading, Image, NavLink, Paragraph, Section } from "da-awesome-library/build";
import image_charity from "../../../public/images/charity.png"
import hw_logo from "../../../public/images/hw_logo.png"
import closeup_handshake from "../../../public/images/closeup_handshake.png"
import lightbulb from "../../../public/images/lightbulb.png"
import "./Home.scss";

const Home = ({theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "DraqonDevelops.com"
    }, [])

    return (
        <div className={setClass("hw_home hw_route", [theme], className)}>
            <Section direction={"column"} wrap={"wrap"} gap={"small"}>
                <Heading theme={theme} className="hw_home__teasercontent" size="teaser" content={"Hai & Welcome! Im Draqi"} />
                <Paragraph theme={theme} className="hw_home__teasercontent" content={"I am a 25 years old software engineer and work on voluntary projects and other interesting stuff."} />
            </Section>
            
            <Section direction={"column"} wrap={"wrap"} gap={"small"}>
                <Heading theme={theme} size="large" content={"All My Web Projects"} />
                <Paragraph theme={theme} content={"I am a webdeveloper by heart and am proud to claim the following websites to be owned and ran by me."} />
            </Section>

            <Section className="hw_home__three hw_home__charity" direction={"row"} wrap={"wrap"} gap={"small"}>
                <Section className="hw_home__threechild" direction={"column"} wrap={"nowrap"} gap={"small"}>
                    <Heading theme={theme} size="large" content={"Hire Or Work With Me"} />
                    <Image className="hw_home__threeimg" source={closeup_handshake} />
                    <Paragraph theme={theme} className="hw_home__teasercontent" content={"Well, if you do have an offer you think could be of interest, go ahead and try your luck to hire me!"} />
                    <NavLink theme={theme} className="hw_button hw_button--main" ReactLink={ReactLink} to={"/hire-me"} content={"Hire Me!"} />
                </Section>
                
                <Section className="hw_home__threechild hw_home__charity" direction={"column"} wrap={"nowrap"} gap={"small"}>
                    <Section className="hw_section--alt" direction={"row"} wrap={"nowrap"} gap={"small"}>
                        <Image source={hw_logo} />
                        <Heading theme={theme} className="hw_heading--alt" size="large" content={"Get Your Brand Pitched!"} />
                    </Section>
                    <Image className="hw_home__threeimg" source={lightbulb} />
                    <Paragraph theme={theme} className="hw_home__teasercontent" content={"If you like to get pitched for a design, concept, or the implementation of a website, please follow the link below. "} />
                    <a href="" className="hw_button hw_button--alt" children={"Visit Hatching Wonders!"} />
                </Section>

                <Section className="hw_home__threechild hw_home__charity" direction={"column"} wrap={"nowrap"} gap={"small"}>
                    <Heading theme={theme} size="large" content={"On A Charitable Mission?"} />
                    <Image className="hw_home__threeimg" source={image_charity} />
                    <Paragraph theme={theme} className="hw_home__teasercontent" content={"Peek into everything charitable my  heart and help goes into. I’m usually always to have to help on projects for charitable causes."} />
                    <NavLink theme={theme} className="hw_button hw_button--main" ReactLink={ReactLink} to={"/charity"} content={"Hire Me!"} />
                </Section>
            </Section>
        </div>
    )
}

export default Home

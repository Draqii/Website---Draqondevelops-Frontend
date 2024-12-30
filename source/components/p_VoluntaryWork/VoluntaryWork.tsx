import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { VoluntaryWorkProps } from "./VoluntaryWork.types";
import { Button, Heading, Icon, Image, Paragraph } from "da-awesome-library/build";
import bunnies from "../../../public/images/bunnies.jpg"
import teaching from "../../../public/images/teaching.jpg"
import softwaredev from "../../../public/images/softwaredev.jpg"
import turtle from "../../../public/images/turtle.png"
import ExtLinkAsset from "../../../public/svgs/ext_link.svg"
import DropDownAsset from "../../../public/svgs/arrow.svg"
import "./VoluntaryWork.scss";

const VoluntaryWork = ({theme, className}: VoluntaryWorkProps) => {

    useEffect(() => {
        document.title = "Charity - DraqonDevelops.com"
    }, [])

    return (
        <div className={setClass("hw_voluntarywork hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Voluntary Work I Do"} />
            <Paragraph content={"title"} />
            <div className="hw_voluntarywork__sections">
                <VoluntaryTask 
                    theme={theme}
                    isLink
                    cta="Help Us"
                    learnMore="Learn More"
                    description={"I help at a german local animal shelter, 'Das Darmstädter Tierheim'. There I support the team to look after our dogs, pigeons, turtles, pigs and rabbits"} 
                    image={turtle} 
                    href=""
                    name={"Animal Caretaking"} />
                <VoluntaryTask 
                    theme={theme}
                    isLink
                    learnMore="Learn More"
                    description={"I study rabbits and built a habitat for my first two pet rabbits. My goal is to make it as great as it can be to rescue even more rabbits into a permanent home. >w<"} 
                    cta="Donate"
                    image={bunnies} 
                    href=""
                    name={"Project Pet Rabbits"} />
                <VoluntaryTask 
                    theme={theme}
                    learnMore="Learn More"
                    description="I teach coding aswell as designing for people on every level, and help them to gain security in getting around todays digital world." 
                    cta="Reserve Schedule"
                    image={teaching} 
                    href=""
                    isLink
                    name={"Teaching Coding"} />
                <VoluntaryTask 
                    theme={theme}
                    description="I am a strong beliefer that useful knowledge and tools are supposed to be shared and easily accesable~ hence I distribute cool software i write for free!" 
                    cta="Check My Softwares Out"
                    image={softwaredev} 
                    href=""
                    name={"Software Development"} />
            </div>
        </div>
    )
}

const DropSection = (title, content, theme, className) => {
    
    return (
        <div className={setClass("hw_voluntarywork__dropsection", [theme], className)}>
            <Paragraph content={title} />
            <div>
                {content}
            </div>
        </div>
    )
}

const VoluntaryTask = ({href, isDropDown, isLink, learnMore, cta, image, name, description, theme, className}: any) => {

    return (
        <div className={setClass("hw_voluntarywork__section", [theme], className)}>
            <Heading theme={theme} size="large" content={name} />
            <Image className="hw_voluntarywork__image" source={image} />
            <Paragraph theme={theme} content={description} />
            <div className="hw_voluntarywork__split">
                {learnMore ? <span>
                    {isLink ? <Icon theme={theme} className="hw_voluntarywork__spliticon" ReactSVG={ExtLinkAsset} /> : null}
                    {isDropDown ? <Icon theme={theme} className="hw_voluntarywork__spliticon" ReactSVG={DropDownAsset} /> : null}
                    {isLink ? <a href={href} className="hw_button" target="_blank">{learnMore}</a> :
                     <Button theme={theme} onClick={()=>null} content={learnMore} />}
                    </span> : null}
                {cta ? <Button theme={theme} className="hw_button--cta" onClick={()=>null} content={cta} /> : null}
            </div>
        </div>
    )
}

export default VoluntaryWork

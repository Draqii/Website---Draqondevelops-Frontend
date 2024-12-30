import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { ProjectsProps } from "./Projects.types";
import { Heading, Image, Paragraph } from "da-awesome-library/build";
import rabbithutch from "../../../public/images/rabbithutch.png"
import hatchingwonders from "../../../public/images/hatchingwonders.png"
import "./Projects.scss";

const Projects = ({theme, className}: ProjectsProps) => {

    useEffect(() => {
        document.title = "Projects - DraqonDevelops.com"
    }, [])

    return (
        <div className={setClass("hw_projects hw_route", [theme], className)}>

            <Heading theme={theme} size="teaser" content={"All My Projets"} />
            <Heading theme={theme} size="large" content={"Websites"} />
            <div className="hw_projects__list">
            <Project theme={theme} description="" image={rabbithutch} name={"The Rabbit Hutch"} />
            <Project theme={theme} description="" image={rabbithutch} name={"Files Planet"} />
            <Project theme={theme} description="" image={hatchingwonders} name={"Hatching Wonders"} />
            <Project theme={theme} description="" image={hatchingwonders} name={"Coding For Everyone"} />
            <Project theme={theme} description="" image={hatchingwonders} name={"Finance Overview<"} />
            </div>
            <br/>
            <Heading theme={theme} size="large" content={"Tools"} />
            <Project theme={theme} name={"Simple Photorealism"} />
            <Project theme={theme} name={"HTML Highlight"} />
            <Project theme={theme} name={"Niteswitch"} />
        </div>
    )
}

const Project = ({image, name,  description, theme, className}: any) => {

    return (
        <div className={setClass("hw_project", [theme], className)}>
            <Heading theme={theme} size="medium" content={name} />
            <Image className="hw_project__image" source={image} />
            <Paragraph theme={theme} content={description}/>
        </div>
    )
}

export default Projects

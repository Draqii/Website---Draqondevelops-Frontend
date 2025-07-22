import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { MainProps } from "./Main.types";
import { Button, Heading, Image, Paragraph } from "da-awesome-library/build";
import char_a from "../../../public/images/char_a.png"
import char_b from "../../../public/images/char_b.png"
import nav_anvil from "../../../public/images/nav_anvil.png"
import nav_camera from "../../../public/images/nav_camera.png"
import nav_download from "../../../public/images/nav_download.png"
import nav_gears from "../../../public/images/nav_gears.png"
import nav_trophy from "../../../public/images/nav_trophy.png"
import nav_web from "../../../public/images/nav_web.png"
import Images from "../o_Images/Images";
import Trackmania from "../o_Trackmania/Trackmania";
import Webdev from "../o_Webdev/Webdev";
import Downloads from "../o_Discord/Discord";
import Blender from "../o_HatchingWonders/HatchingWonders";
import texts from "./Main.json"
import MainBottom from "../m_MainBottom/MainBottom";
import MainHeader from "../m_MainHeader/MainHeader";
import { useMediaQuery } from "../../modules/hooks/useMediaQuery";
import "./Main.scss";

const Main = ({ bg, setBG, language, theme, className }: MainProps) => {

    const [activeSection, setActiveSection] = useState(0)

    const isLowMobile = useMediaQuery("only screen and (max-width: 380px)");

    const sections = [
        {
            title: isLowMobile ? <span>Trackmania Stuff</span> : <span>Trackmania<br />Kinda Stuff</span>,
            image: nav_trophy,
            component: <Trackmania />
        },
                {
            title: isLowMobile ? <span>My Discord Bots</span> : <span>My Discord <br/>Bots</span>,
            image: nav_download,
            component: <Downloads />
        },
        {
            title: isLowMobile ? <span>My Creative Agency</span> : <span>My Creative<br />Agency</span>,
            image: nav_anvil,
            component: <Blender />
        },
                {
            title: isLowMobile ? <span>My Other Projects</span> : <span>My Other<br />Projects</span>,
            image: nav_web,
            component: <Webdev />
        },
        {
            title: isLowMobile ? <span>More About Me</span> : <span>More About<br />Myself</span>,
            image: nav_camera,
            component: <Images />
        },
    ]

    return (
        <div className={setClass("hw_main", [theme], "")}>
            <MainHeader theme="dark" />
            <main className="hw_main__top">
                {sections.map((section, sectionID) =>
                <section className="hw_main__topsection">
                    <Heading
                        className="hw_main__navtitle"
                        children={section.title}
                        size={"large"}
                        theme={theme} />
                    <Image
                        className="hw_main__navimage"
                        src={section.image}
                        alt={"no image"}
                        theme={theme} />
                    <Button
                        className={"hw_main__navbutton" + (activeSection === sectionID ? " hw_main__navbutton--active" : "")}
                        isEnabled={true}
                        children={activeSection === sectionID ? isLowMobile ? "Active" : "Exploring" : "Explore"}
                        isPrimary={false}
                        theme={theme}
                        onClick={() => setActiveSection(sectionID)} />
                </section>)}
                <Image
                    className="hw_main__bg"
                    src={char_b}
                    alt={"no image"}
                    theme={theme} />
            </main>
            <MainBottom component={sections[activeSection].component} />
        </div>
    )
}

export default Main

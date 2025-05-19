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
import char_tiny from "../../../public/images/char_tiny.png"
import Images from "../o_Images/Images";
import Trackmania from "../o_Trackmania/Trackmania";
import Webdev from "../o_Webdev/Webdev";
import Downloads from "../o_Downloads/Downloads";
import Blender from "../o_Blender/Blender";
import texts from "./Main.json"
import "./Main.scss";

const Main = ({ bg, setBG, language, theme, className }: MainProps) => {

    const [activeSection, setActiveSection] = useState(0)

    const sections = [
        {
            title: <span>Trackmania<br />Kinda Stuff</span>,
            image: nav_trophy,
            component: <Trackmania />
        },
        {
            title: <span>Design And<br />Webdev</span>,
            image: nav_web,
            component: <Webdev />
        },
        {
            title: <span>3D Blender<br />And Unreal</span>,
            image: nav_anvil,
            component: <Blender />
        },
        {
            title: <span>Download<br />Section</span>,
            image: nav_download,
            component: <Downloads />
        },
        {
            title: <span>More About<br />Myself</span>,
            image: nav_camera,
            component: <Images />
        },
    ]

    return (
        <div className={setClass("hw_main", [theme], "")}>
            <header className="hw_main__header">
                <Heading
                    className="hw_main__title"
                    children={"Hai! I’m Draqii!"}
                    size={"teaser"}
                    theme={theme} />
                <section className="hw_main__headersplit">
                    <Image
                        className="hw_main__charhead"
                        src={char_tiny}
                        alt={"no image"}
                        theme={theme} />
                    <Paragraph
                        className="hw_main__subtitle"
                        children={"Hai! I am a twenty five year old creative soul from germany."}
                        size={"large"}
                        theme={theme} />
                </section>
            </header>
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
                            children={activeSection === sectionID ? "Exploring" : "Explore"}
                            isPrimary={false}
                            theme={theme}
                            onClick={() => setActiveSection(sectionID)} />
                    </section>)}
            </main>
            <div className="hw_main__bottom">
                {sections[activeSection].component}
            </div>
        </div>
    )
}

export default Main

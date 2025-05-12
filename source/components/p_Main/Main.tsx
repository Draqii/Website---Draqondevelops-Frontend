import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { MainProps } from "./Main.types";
import { Button, Heading, Image, Paragraph } from "da-awesome-library/build";
import texts from "./Main.json"
import nav_trophy from "../../../public/images/nav_trophy.png"
import nav_web from "../../../public/images/nav_web.png"
import nav_anvil from "../../../public/images/nav_anvil.png"
import nav_download from "../../../public/images/nav_download.png"
import nav_camera from "../../../public/images/nav_camera.png"
import char_a from "../../../public/images/char_a.png"
import char_b from "../../../public/images/char_b.png"
import Images from "../o_Images/Images";
import Trackmania from "../o_Trackmania/Trackmania";
import Webdev from "../o_Webdev/Webdev";
import "./Main.scss";
import Blender from "../o_Blender/Blender";
import Downloads from "../o_Downloads/Downloads";

const Main = ({ bg, setBG, language, theme, className }: MainProps) => {

    const [activeSection, setActiveSection] = useState(5)


    return (
        <div className="hw_app__maincontent">
            <div className="hw_app__uppercontent">
                <section className="hw_section__teaser">
                    <Heading children={"Hai! I'm Draqii!"} size={"teaser"} theme={"light"} />
                    <Paragraph size={"large"} theme={"light"}>Hai! I'm Draqii, a twenty five year old creative soul from germany. I create a ton of different stuff so feel free to sniff around a bit!</Paragraph>
                </section>
                <section className="hw_section__top">
                    <div onClick={() => activeSection === 5 ? null : setActiveSection(5)} className={"hw_section__item " + (activeSection === 5 ? "hw_section__item--active" : "")}>
                        <Paragraph size={"medium"} theme={"light"}>More About Me As Person</Paragraph>
                        <Image src={nav_camera} alt={""} theme={"light"} />
                        <Button children={activeSection === 5 ? "Exploring" : "Explore"} isPrimary={false} theme={"light"} onClick={() => null} isEnabled={!(activeSection === 5)} />
                    </div>
                    <div onClick={() => activeSection === 0 ? null : setActiveSection(0)} className={"hw_section__item " + (activeSection === 0 ? "hw_section__item--active" : "")}>
                        <Paragraph size={"medium"} theme={"light"}>Trackmania Related Stuff</Paragraph>
                        <Image src={nav_trophy} alt={""} theme={"light"} />
                        <Button children={activeSection === 0 ? "Exploring" : "Explore"} isPrimary={false} theme={"light"} onClick={() => null} isEnabled={!(activeSection === 0)} />
                    </div>
                    <div onClick={() => activeSection === 1 ? null : setActiveSection(1)} className={"hw_section__item " + (activeSection === 1 ? "hw_section__item--active" : "")}>
                        <Paragraph size={"medium"} theme={"light"}>Web Design & Development</Paragraph>
                        <Image src={nav_web} alt={""} theme={"light"} />
                        <Button children={activeSection === 1 ? "Exploring" : "Explore"} isPrimary={false} theme={"light"} onClick={() => null} isEnabled={!(activeSection === 1)} />
                    </div>
                    <div onClick={() => activeSection === 3 ? null : setActiveSection(3)} className={"hw_section__item " + (activeSection === 3 ? "hw_section__item--active" : "")}>
                        <Paragraph size={"medium"} theme={"light"}>3D Blender  And Unreal</Paragraph>
                        <Image src={nav_anvil} alt={""} theme={"light"} />
                        <Button children={activeSection === 3 ? "Exploring" : "Explore"} isPrimary={false} theme={"light"} onClick={() => null} isEnabled={!(activeSection === 3)} />
                    </div>
                    <div onClick={() => activeSection === 4 ? null : setActiveSection(4)} className={"hw_section__item " + (activeSection === 4 ? "hw_section__item--active" : "")}>
                        <Paragraph size={"medium"} theme={"light"}>Download Section</Paragraph>
                        <Image src={nav_download} alt={""} theme={"light"} />
                        <Button children={activeSection === 4 ? "Exploring" : "Explore"} isPrimary={false} theme={"light"} onClick={() => null} isEnabled={!(activeSection === 4)} />
                    </div>
                </section>
                <Image className="hw_app__background" src={bg === "custom" ? char_b : char_a} alt={""} theme={"light"} />
            </div>
            <div className="hw_app__lowercontent">
                <section className="hw_section__details">
                    {activeSection === 0 ? <Trackmania /> 
                    :activeSection === 1 ? <Webdev /> 
                    :activeSection === 3 ? <Blender />
                    :activeSection === 4 ? <Downloads />
                    :activeSection === 5 ? <Images /> :null}
                </section>
            </div>
        </div>
    )
}

export default Main

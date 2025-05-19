import React, { useState } from "react";
import { setClass } from "../../modules/setClass";
import { MainProps } from "./Main.types";
import { Button, Heading, Image, Paragraph } from "da-awesome-library/build";
import char_a from "../../../public/images/char_a.png"
import char_b from "../../../public/images/char_b.png"
import Images from "../o_Images/Images";
import Trackmania from "../o_Trackmania/Trackmania";
import Webdev from "../o_Webdev/Webdev";
import Downloads from "../o_Downloads/Downloads";
import Blender from "../o_Blender/Blender";
import texts from "./Main.json"
import Top from "../o_Top/Top";
import "./Main.scss";

const Main = ({ bg, setBG, language, theme, className }: MainProps) => {

    const [activeSection, setActiveSection] = useState(5)

    return (
        <div className={setClass("hw_top", [theme], "")}>
            <div className="hw_main__top">
                <section className="hw_section__teaser">
                    <Heading 
                        children={"Hai! I'm Draqii!"} 
                        size={"teaser"} 
                        theme={"light"} />
                    <Paragraph 
                        children={"Hai! I'm Draqii, a twenty five year old creative soul from germany. I create a ton of different stuff so feel free to sniff around a bit!"}
                        size={"large"} 
                        theme={"light"} />
                </section>
                <Top activeSection={activeSection} setActiveSection={setActiveSection} />
                <Image 
                    className="hw_main__background" 
                    src={bg === "custom" ? char_b : char_a} 
                    alt={""} 
                    theme={"light"} />
            </div>
            <div className="hw_main__bottom">
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

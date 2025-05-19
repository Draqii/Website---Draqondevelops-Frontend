import React from "react";
import { setClass } from "../../modules/setClass";
import { TopProps } from "./Top.types";
import { Paragraph, Button, Image } from "da-awesome-library/build";
import nav_trophy from "../../../public/images/nav_trophy.png"
import nav_web from "../../../public/images/nav_web.png"
import nav_anvil from "../../../public/images/nav_anvil.png"
import nav_download from "../../../public/images/nav_download.png"
import nav_camera from "../../../public/images/nav_camera.png"
import texts from "./Top.json"
import "./Top.scss";

const Top = ({ activeSection, setActiveSection, language, theme, className }: TopProps) => {

    return (
        <div className={setClass("hw_top", [theme], className)}>
            <div
                onClick={() => activeSection === 5 ? null : setActiveSection(5)}
                className={"hw_section__item " + (activeSection === 5 ? "hw_section__item--active" : "")}>
                <Paragraph
                    children={"More About Me As Person"}
                    size={"medium"}
                    theme={"light"} />
                <Image
                    src={nav_camera}
                    alt={""}
                    theme={"light"} />
                <Button
                    children={activeSection === 5 ? "Exploring" : "Explore"}
                    isPrimary={false} theme={"light"}
                    onClick={() => null}
                    isEnabled={!(activeSection === 5)} />
            </div>
            <div
                onClick={() => activeSection === 0 ? null : setActiveSection(0)}
                className={"hw_section__item " + (activeSection === 0 ? "hw_section__item--active" : "")}>
                <Paragraph
                    children={"Trackmania Related Stuff"}
                    size={"medium"}
                    theme={"light"} />
                <Image
                    src={nav_trophy} alt={""}
                    theme={"light"} />
                <Button
                    children={activeSection === 0 ? "Exploring" : "Explore"}
                    isPrimary={false}
                    theme={"light"}
                    onClick={() => null}
                    isEnabled={!(activeSection === 0)} />
            </div>
            <div
                onClick={() => activeSection === 1 ? null : setActiveSection(1)}
                className={"hw_section__item " + (activeSection === 1 ? "hw_section__item--active" : "")}>
                <Paragraph
                    children={"Web Design & Development"}
                    size={"medium"}
                    theme={"light"} />
                <Image
                    src={nav_web}
                    alt={""}
                    theme={"light"} />
                <Button
                    children={activeSection === 1 ? "Exploring" : "Explore"}
                    isPrimary={false}
                    theme={"light"}
                    onClick={() => null}
                    isEnabled={!(activeSection === 1)} />
            </div>
            <div
                onClick={() => activeSection === 3 ? null : setActiveSection(3)}
                className={"hw_section__item " + (activeSection === 3 ? "hw_section__item--active" : "")}>
                <Paragraph
                    children={"3D Blender  And Unreal"}
                    size={"medium"}
                    theme={"light"} />
                <Image
                    src={nav_anvil} alt={""}
                    theme={"light"} />
                <Button
                    children={activeSection === 3 ? "Exploring" : "Explore"}
                    isPrimary={false}
                    theme={"light"}
                    onClick={() => null}
                    isEnabled={!(activeSection === 3)} />
            </div>
            <div
                onClick={() => activeSection === 4 ? null : setActiveSection(4)}
                className={"hw_section__item hw_section__download " + (activeSection === 4 ? "hw_section__item--active" : "")}>
                <Paragraph
                    children={"Download Section"}
                    size={"medium"}
                    theme={"light"} />
                <Image
                    src={nav_download}
                    alt={""}
                    theme={"light"} />
                <Button
                    children={activeSection === 4 ? "Exploring" : "Explore"}
                    isPrimary={false}
                    theme={"light"}
                    onClick={() => null}
                    isEnabled={!(activeSection === 4)} />
            </div>
        </div>
    )
}

export default Top

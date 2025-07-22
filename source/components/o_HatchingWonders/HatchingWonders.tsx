import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { BlenderProps } from "./HatchingWonders.types";
import texts from "./HatchingWonders.json"
import logo_hw from "../../../public/images/logo_hw.png"
import { Heading, Paragraph, Button, Image, Link } from "da-awesome-library/build";
import "./HatchingWonders.scss";

const Blender = ({ language, theme, className }: BlenderProps) => {

    const link_figma = "https://www.figma.com/design/PIVmqEjyV4JhMnynfhTi2R/Assets---Icons?m=auto&t=C1vQI87RgIzq7V4U-1"

    useEffect(() => {
        let main_title = "DraqonDevelops"
        let sub_title = "Hatching Wonders"
        document.title = sub_title + " - " + main_title
    }, [])

    return (
        <div className={setClass("hw_wonders hw_sections", [theme], className)}>
            <section className="hw_wonders__section hw_wonders__introsection">
                <Image
                    className="hw_wonders__introimage"
                    src={logo_hw}
                    alt={""}
                    theme={"light"} />
                <div className="hw_wonders__introsplit">
                    <Heading
                        className="hw_wonders__heading"
                        children={"Hatching Wonders, My Creative Agency"}
                        size={"xxlarge"}
                        theme={theme} />
                    <Paragraph
                        className="hw_wonders__text"
                        children={"I own a small creative agency Hatching Wonders, If you therefor would like to request collaboration, help, or want to get pitched, please check the sections below."}
                        size={"medium"}
                        theme={theme} />
                </div>
            </section>
            <section className="hw_wonders__section hw_webdev__sectionparent hw_wonders__earlyparent">
                <section className="hw_wonders__section hw_webdev__sectionchild">
                    <Heading
                        className="hw_wonders__subheading"
                        children={"Request Our Help!"}
                        size={"xlarge"}
                        theme={theme} />
                    <Paragraph
                        className="hw_wonders__text"
                        children={"Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla "}
                        size={"medium"}
                        theme={theme} />
                    <Link
                        className="hw_wonders__sectionlink"
                        to={link_figma}
                        isInternal={false}
                        children={"Text bla Text bla!"}
                        target={"_blank"}
                        theme={theme} />
                </section>
                <section className="hw_wonders__section hw_wonders__sectionchild">
                    <Heading
                        className="hw_wonders__subheading"
                        children={"Let Us Pitch You!"}
                        size={"xlarge"}
                        theme={theme} />
                    <Paragraph
                        className="hw_wonders__text"
                        children={"Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla Text bla "}
                        size={"medium"}
                        theme={theme} />
                    <Link
                        className="hw_wonders__sectionlink"
                        to={link_figma}
                        isInternal={false}
                        children={"Text bla Text bla!"}
                        target={"_blank"}
                        theme={theme} />
                </section>
            </section>
        </div>
    )
}

export default Blender

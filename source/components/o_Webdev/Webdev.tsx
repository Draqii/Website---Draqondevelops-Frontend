import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { WebdevProps } from "./Webdev.types";
import texts from "./Webdev.json"
import dl_package1 from "../../../public/images/dl_package1.png"
import dl_package2 from "../../../public/images/dl_package2.png"
import web_icons from "../../../public/images/web_icons.png"
import { Button, Heading, Paragraph, Image, Link } from "da-awesome-library/build";
import "./Webdev.scss";

const Webdev = ({ language, theme, className }: WebdevProps) => {

    const web_packages = [
        {
            image: dl_package1,
            name: "Awesome Nite Switch",
            link_github: "https://github.com/Draqii/NiteSwitch",
            link_clipboard: "npm install --save-dev @latest nite-switch",
        },
        {
            image: dl_package2,
            name: "HTML Highlight",
            link_github: "https://github.com/Draqii/HTML-Highlight",
            link_clipboard: "npm install --save-dev @latest html-highlight",
        },
    ]

    useEffect(() => {
            let main_title = "DraqonDevelops"
            let sub_title = "Projects"
            document.title = sub_title + " - " + main_title
        }, [])

    return (
        <div className={setClass("hw_webdev hw_sections", [theme], className)}>
            <Heading
                className="hw_webdev__title"
                children={"My Other Projects"}
                size={"teaser"}
                theme={theme} />
            <section className="hw_webdev__section hw_webdev__sectionparent hw_webdev__lateparent">
                <section className="hw_webdev__section hw_webdev__sectionchild">
                    <Heading
                        className="hw_webdev__heading"
                        children={"My Icon Library"}
                        size={"xxlarge"}
                        theme={theme} />
                    <Paragraph
                        className="hw_webdev__text"
                        children={"Check my Icon library for Icons to use for yourself and your brand or project or just as inspiration- All made by me>-<"}
                        size={"medium"}
                        theme={theme} />
                    <Image 
                        className="hw_webdev__iconsimg" 
                        src={web_icons} 
                        alt={""} 
                        theme={"light"} />
                    <Link 
                        className="hw_webdev__sectionlink hw_webdev__linkfigma"
                        to={""}
                        isInternal={false} 
                        children={"Visit On Figma!"} 
                        target={"_blank"}
                        theme={theme} />
                </section>
                <section className="hw_webdev__section hw_webdev__sectionchild">
                    <Heading
                        className="hw_webdev__heading"
                        children={"My Web Packages"}
                        size={"xxlarge"}
                        theme={theme} />
                    <Paragraph
                        className="hw_webdev__text"
                        children={"Free Boilerplates for other developers ^^"}
                        size={"medium"}
                        theme={theme} />
                    <div className="hw_webdev__sectionitems">
                        {web_packages.map((web_package, web_packageID) =>
                        <div className="hw_webdev__sectionitem">
                            <Heading
                                className="hw_webdev__sectionheading"
                                children={web_package.name}
                                size={"medium"}
                                theme={theme} />
                            <Image 
                                className="hw_webdev__sectionimg"
                                src={web_package.image} 
                                alt={""} 
                                theme={"light"} />
                            <div className="hw_webdev__sectionlinks">
                                <Link 
                                    className="hw_webdev__sectionlink"
                                    to={web_package.link_github}
                                    isInternal={false} 
                                    children={"Visit On GitHub!"} 
                                    target={"_blank"}
                                    theme={theme} />
                                <Link 
                                    className="hw_webdev__sectionlink"
                                    to={web_package.link_clipboard}
                                    isInternal={false} 
                                    children={"Clipboard Copy!"}
                                    copyLink={web_package.link_clipboard}
                                    target={"_self"}
                                    theme={theme} />
                            </div>
                        </div>)}
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Webdev

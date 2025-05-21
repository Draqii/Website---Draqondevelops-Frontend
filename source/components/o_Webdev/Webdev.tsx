import React from "react";
import { setClass } from "../../modules/setClass";
import { WebdevProps } from "./Webdev.types";
import texts from "./Webdev.json"
import { Button, Heading, Paragraph } from "da-awesome-library/build";
import "./Webdev.scss";

const Webdev = ({ language, theme, className }: WebdevProps) => {

    return (
        <div className={setClass("hw_webdev", [theme], className)}>
            <Heading
                className="hw_webdev__title"
                children={"Design & Web Development"}
                size={"teaser"}
                theme={theme} />
            <section className="hw_webdev__section">
                <Heading
                    className="hw_webdev__heading"
                    children={"My Icon Library"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_webdev__text"
                    children={"Check my Icon library for Icons to use for yourself and your brand or project or just as inspiration- All made by me >-<"}
                    size={"medium"}
                    theme={theme} />
            </section>
            <section className="hw_webdev__section">
                <Heading
                    className="hw_webdev__heading"
                    children={"My Websites"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_webdev__text"
                    children={"If you’re curious about my other projects and websites, see below and browse around for a bit!"}
                    size={"medium"}
                    theme={theme} />
            </section>
            <section className="hw_webdev__section">
                <Heading
                    className="hw_webdev__heading"
                    children={"Hatching Wonders, My Creative Agency"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_webdev__text"
                    children={"I own a small creative agency Hatching Wonders, If you therefor would like to request collaboration, help, or want to get pitched, please check the sections below."}
                    size={"medium"}
                    theme={theme} />
            </section>
            <section className="hw_webdev__section">
                <Heading
                    className="hw_webdev__heading"
                    children={"We Take Inquiries"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_webdev__text"
                    children={"Check my Icon library for Icons to use for yourself and your brand or project or just as inspiration- All made by me >-<"}
                    size={"medium"}
                    theme={theme} />
            </section>
            <section className="hw_webdev__section">
                <Heading
                    className="hw_webdev__heading"
                    children={"Let Us Pitch You"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_webdev__text"
                    children={"Check my Icon library for Icons to use for yourself and your brand or project or just as inspiration- All made by me >-<"}
                    size={"medium"}
                    theme={theme} />
            </section>
        </div>
    )
}

export default Webdev

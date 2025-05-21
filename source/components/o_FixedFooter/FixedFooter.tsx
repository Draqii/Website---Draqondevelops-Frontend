import React from "react";
import { setClass } from "../../modules/setClass";
import { FixedFooterProps } from "./FixedFooter.types";
import texts from "./FixedFooter.json"
import "./FixedFooter.scss";
import tech_angel from "../../../public/images/tech_angel.png"
import tech_babel from "../../../public/images/tech_babel.png"
import tech_blender from "../../../public/images/tech_blender.png"
import tech_css from "../../../public/images/tech_css.png"
import tech_gitlab from "../../../public/images/tech_gitlab.png"
import tech_html from "../../../public/images/tech_html.png"
import tech_js from "../../../public/images/tech_js.png"
import tech_mongo from "../../../public/images/tech_mongo.png"
import tech_npm from "../../../public/images/tech_npm.png"
import tech_python from "../../../public/images/tech_python.png"
import tech_react from "../../../public/images/tech_react.png"
import tech_sass from "../../../public/images/tech_sass.png"
import tech_storybook from "../../../public/images/tech_storybook.png"
import tech_ts from "../../../public/images/tech_ts.png"
import tech_vsc from "../../../public/images/tech_vsc.png"
import tech_webpack from "../../../public/images/tech_webpack.png"
import { Heading, Paragraph } from "da-awesome-library/build";

const FixedFooter = ({language, theme, className}: FixedFooterProps) => {

    const icons = [tech_angel, tech_babel, tech_blender, tech_css, tech_gitlab, tech_html, tech_js, tech_mongo, tech_npm, tech_python, tech_react, tech_sass, tech_storybook, tech_ts, tech_vsc, tech_webpack]

    return (
        <footer className={setClass("hw_fixedfooter", [theme], className)}>
            <Heading 
                className="hw_fixedfooter__heading" 
                size={"medium"} 
                theme={"light"}
                children={"Powered By"} />
            <section className="hw_fixedfooter__icons">
                {icons.map((icon, id) => 
                <img 
                    className="hw_fixedfooter__icon" 
                    src={icon} 
                    key={id} />)}
            </section>
        </footer>
    )
}

export default FixedFooter

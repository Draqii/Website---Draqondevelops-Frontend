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
                className="hw_webdev"
                children={"Design And Web Development"}
                size={"teaser"}
                theme={theme} />
        </div>
    )
}

export default Webdev

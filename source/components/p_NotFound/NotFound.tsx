import React from "react";
import {setClass} from "../../modules/setClass";
import {NotFoundProps} from "./NotFound.types";
import Heading from "../a_Heading/Heading";
import "./NotFound.scss";

const NotFound = ({theme, className}: NotFoundProps) => {

    return (
        <div className={setClass("hw_notfound", [theme], className)}>
            <Heading theme={theme} children={"Page Not Found"} size={"teaser"} />
        </div>
    )
}

export default NotFound

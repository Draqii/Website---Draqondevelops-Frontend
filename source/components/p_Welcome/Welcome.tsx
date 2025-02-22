import React from "react";
import {setClass} from "../../modules/setClass";
import {WelcomeProps} from "./Welcome.types";
import "./Welcome.scss";
import Heading from "../a_Heading/Heading";
import hammer from "../../../public/images/hammer.png"

const Welcome = ({theme, className}: WelcomeProps) => {

    return (
        <div className={setClass("welcome", [theme], className)}>
            <Heading theme={theme} size={"teaser"}> Hai!  I'm Draqii. </Heading>
            <img className="hammer" src={hammer} />
        </div>
    )
}

export default Welcome

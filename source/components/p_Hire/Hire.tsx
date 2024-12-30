import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HireProps } from "./Hire.types";
import { Heading } from "da-awesome-library/build";
import "./Hire.scss";

const Hire = ({theme, className}: HireProps) => {

    useEffect(() => {
        document.title = "Hire Me - DraqonDevelops.com"
    }, [])

    return (
        <div className={setClass("hire", [theme], className)}>
            <Heading theme={theme} className="hw_home__teasercontent" size="teaser" content={"Hire Me!"} />
        </div>
    )
}

export default Hire

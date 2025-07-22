import React from "react";
import { setClass } from "../../modules/setClass";
import { MainHeaderProps } from "./MainHeader.types";
import { Paragraph, Image } from "da-awesome-library/build";
import char_tiny from "../../../public/images/char_tiny.png"
import texts from "./MainHeader.json"
import "./MainHeader.scss";

const MainHeader = ({language, theme, className}: MainHeaderProps) => {

    return (
        <div className={setClass("hw_mainheader", [theme], className)}>
            <Image
                className="hw_main__charhead"
                src={char_tiny}
                alt={"no image"}
                theme={theme} />
            <Paragraph
                className="hw_main__subtitle"
                children={"Hai, I'm Draqi! I'm 25 year old and design and develop all sorts of things."}
                size={"large"}
                theme={theme} />
        </div>
    )
}

export default MainHeader

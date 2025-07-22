import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { ImagesProps } from "./Images.types";
import texts from "./Images.json"
import "./Images.scss";
import me_0 from "../../../public/images/me_0.png"
import me_1 from "../../../public/images/me_1.png"
import me_2 from "../../../public/images/me_2.png"
import me_3 from "../../../public/images/me_3.png"
import me_4 from "../../../public/images/me_4.png"
import me_5 from "../../../public/images/me_5.png"
import me_6 from "../../../public/images/me_6.png"
import me_7 from "../../../public/images/me_7.png"
import me_8 from "../../../public/images/me_8.png"
import me_9 from "../../../public/images/me_9.png"
import me_10 from "../../../public/images/me_10.png"
import me_11 from "../../../public/images/me_11.png"

import { Heading, Paragraph, Image } from "da-awesome-library/build";

const Images = ({language, theme, className}: ImagesProps) => {

    useEffect(() => {
        let main_title = "DraqonDevelops"
        let sub_title = "About Me"
        document.title = sub_title + " - " + main_title
    }, [])

    return (
        <div className={setClass("hw_images hw_sections", [theme], className)}>
            <Heading
                className="hw_images__title"
                children={"More About Myself"}
                size={"teaser"}
                theme={theme} />
        </div>
    )
}

export default Images

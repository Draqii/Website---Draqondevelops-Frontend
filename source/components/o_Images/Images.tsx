import React from "react";
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

import { Heading, Image } from "da-awesome-library/build";

const Images = ({language, theme, className}: ImagesProps) => {

    return (
        <div className={setClass("hw_images", [theme], className)}>
            <div className="hw_images__section">
                <Heading children={"I’m A Creative Nerdy Dude!"} size={"small"} theme={"light"} />
                <Image src={me_0} alt={""} theme={"light"} />
                <Image src={me_1} alt={""} theme={"light"} />
            </div>
            <div className="hw_images__section">
                <Heading children={"And I’m A Femboy Too!"} size={"small"} theme={"light"} />
                <Image src={me_2} alt={""} theme={"light"} />
                <Image src={me_3} alt={""} theme={"light"} />
            </div>
            <div className="hw_images__section">
                <Heading children={"I Live Near Frankfurt"} size={"small"} theme={"light"} />
                <Image src={me_4} alt={""} theme={"light"} />
                <Image src={me_5} alt={""} theme={"light"} />
            </div>
            <div className="hw_images__section">
                <Heading children={"Am Owner Of Two Rabbits"} size={"small"} theme={"light"} />
                <Image src={me_6} alt={""} theme={"light"} />
                <Image src={me_7} alt={""} theme={"light"} />
            </div>
            <div className="hw_images__section">
                <Heading children={"My Primitive PC Setup"} size={"small"} theme={"light"} />
                <Image src={me_8} alt={""} theme={"light"} />
                <Image src={me_9} alt={""} theme={"light"} />
            </div>
            <div className="hw_images__section">
                <Heading children={"Cozy Part Of My Room >-<"} size={"small"} theme={"light"} />
                <Image src={me_10} alt={""} theme={"light"} />
                <Image src={me_11} alt={""} theme={"light"} />
            </div>
        </div>
    )
}

export default Images

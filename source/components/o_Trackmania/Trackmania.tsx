import React from "react";
import { setClass } from "../../modules/setClass";
import { TrackmaniaProps } from "./Trackmania.types";
import { Heading, Image, Paragraph } from "da-awesome-library/build";
import section_race from "../../../public/images/section_race.png"
import texts from "./Trackmania.json"
import "./Trackmania.scss";

const Trackmania = ({language, theme, className}: TrackmaniaProps) => {

    return (
        <div className={setClass("hw_trackmania", [theme], className)}>
            <Image className="hw_trackmania__transition" src={section_race} alt={""} theme={"light"} />
            <Heading children={"Trackmania!"} size={"xxlarge"} theme={"light"} />
            <Paragraph size={"medium"} theme={"light"}>Trackmania</Paragraph>
            <div className="hw_section__detailsinner">
                <Heading children={"Join The Bonk Club!"} size={"xlarge"} theme={"light"} />
            </div>
        </div>
    )
}

export default Trackmania

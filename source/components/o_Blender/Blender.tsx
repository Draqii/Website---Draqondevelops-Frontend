import React from "react";
import { setClass } from "../../modules/setClass";
import { BlenderProps } from "./Blender.types";
import texts from "./Blender.json"
import { Heading, Paragraph, Button } from "da-awesome-library/build";
import "./Blender.scss";

const Blender = ({ language, theme, className }: BlenderProps) => {

    return (
        <div className={setClass("hw_blender", [theme], className)}>
            <Heading
                className="hw_blender__title"
                children={"3D Blender And Unreal"}
                size={"teaser"}
                theme={theme} />
        </div>
    )
}

export default Blender

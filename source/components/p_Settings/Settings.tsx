import React, { useEffect, useState } from "react";
import useCookie, { setItem } from "../../modules/hooks/useCookie";
import { useNavigate } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { GearsProps } from "./Settings.types";
import { Checkbox, Heading, Paragraph, Button } from "da-awesome-library/build";
import texts from "./Settings.json"
import "./Settings.scss";

const Gears = ({ setBG, language, theme, className }: GearsProps) => {

    const navigate = useNavigate()

    const [bg, _setBG]: any = useState(useCookie("hw_bg", "default")[0])

    const updateTheme = () => {
        setItem("hw_bg", bg === "custom" ? "default" : "custom", 360)
        _setBG(bg === "custom" ? "default" : "custom")
    }

    useEffect(() => {
        setBG(bg)
    }, [bg])

    return (
        <div className={setClass("hw_settings", [theme], className)}>

        </div>
    )
}

export default Gears

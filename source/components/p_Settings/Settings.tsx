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
            <section className="hw_settings__teaser">
                <Heading 
                    className="hw_settings__title"
                    children={"Page Settings!"} 
                    size={"teaser"} 
                    theme={"light"} />
                <Paragraph 
                    className="hw_settings__paragraph"
                    children={"Hai! There are a few things you can customize on this website. Choose whatever you like if you feel like it!"}
                    size={"large"} 
                    theme={"light"} />
            </section>
            <section className="hw_settings__section">
                <Checkbox 
                    className="hw_settings__checkbox"
                    checked={bg === "default"} 
                    children={"Safe For Work Mode (No NSFW)"}
                    onChange={() => updateTheme()} 
                    theme={"light"} 
                    hasSecondaryTextColor={false} />
                <Button 
                    className="hw_settings__button"
                    isEnabled={true} 
                    children={"Back To Home"} 
                    isPrimary={false} 
                    theme={"light"}
                    onClick={() => navigate("/")} />
            </section>
        </div>
    )
}

export default Gears

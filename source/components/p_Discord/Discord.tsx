import React from "react";
import { setClass } from "../../modules/setClass";
import { DiscordProps } from "./Discord.types";
import texts from "./Discord.json"
import "./Discord.scss";

const Discord = ({language, theme, className}: DiscordProps) => {

    return (
        <div className={setClass("hw_discord", [theme], className)}>
            discord
        </div>
    )
}

export default Discord

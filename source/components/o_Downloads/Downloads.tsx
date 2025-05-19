import React from "react";
import { setClass } from "../../modules/setClass";
import { DownloadsProps } from "./Downloads.types";
import texts from "./Downloads.json"
import dl_bot1 from "../../../public/images/dl_bot1.png"
import dl_bot2 from "../../../public/images/dl_bot2.png"
import dl_bot3 from "../../../public/images/dl_bot3.png"
import dl_blender from "../../../public/images/dl_blender.png"
import dl_blank from "../../../public/images/dl_blank.png"
import { Heading, Paragraph, Button, Image } from "da-awesome-library/build";
import "./Downloads.scss";

const Downloads = ({ language, theme, className }: DownloadsProps) => {

    const bl_addons = [
        {
            image: dl_blender,
            name: "Simple Photorealism",
            link_git: "https://github.com/Draqii/Simple-Photorealism",
            link_dl: "https://github.com/Draqii/Simple-Photorealism/archive/refs/heads/main.zip"
        },
    ]

    const web_boilerplates = [
        {
            image: dl_blank,
            name: "Website Frontend",
            link_git: "",
            link_dl: ""
        },
        {
            image: dl_blank,
            name: "Website Backend",
            link_git: "",
            link_dl: ""
        },
        {
            image: dl_blank,
            name: "Component Library",
            link_git: "",
            link_dl: ""
        },
    ]

    const web_packages = [
        {
            image: dl_blank,
            name: "Awesome Nite Switch",
            link_git: "https://github.com/Draqii/NiteSwitch",
            link_npm: "npm install --save-dev @latest nite-switch",
            link_dl: "https://github.com/Draqii/NiteSwitch/archive/refs/heads/main.zip"
        },
        {
            image: dl_blank,
            name: "HTML Highlight",
            link_git: "https://github.com/Draqii/HTML-Highlight",
            link_npm: "npm install --save-dev @latest html-highlight",
            link_dl: "https://github.com/Draqii/HTML-Highlight/archive/refs/heads/main.zip"
        },
    ]

    const discord_bots = [
        {
            image: dl_bot1,
            name: "Dice Rolling Bot",
            link: "https://discord.com/oauth2/authorize?client_id=1099491164614295603"
        },
        {
            image: dl_bot3,
            name: "Roles Management Bot",
            link: "https://discord.com/oauth2/authorize?client_id=1323068842783670363"
        },
        {
            image: dl_bot2,
            name: "RPG And Social Bot",
            link: "https://discord.com/oauth2/authorize?client_id=892762630597509142"
        },
    ]

    return (
        <div className={setClass("hw_downloads", [theme], className)}>
            <Heading
                className="hw_downloads"
                children={"Download Section"}
                size={"teaser"}
                theme={theme} />
        </div>
    )
}

export default Downloads

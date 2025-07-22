import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { DownloadsProps } from "./Discord.types";
import texts from "./Discord.json"
import dl_bot1 from "../../../public/images/dl_bot1.png"
import dl_bot2 from "../../../public/images/dl_bot2.png"
import dl_bot3 from "../../../public/images/dl_bot3.png"
import dl_blender from "../../../public/images/dl_blender.png"
import dl_blank from "../../../public/images/dl_blank.png"
import { Heading, Paragraph, Button, Image, Link } from "da-awesome-library/build";
import "./Discord.scss";

const Downloads = ({ language, theme, className }: DownloadsProps) => {

    const bl_addons = [
        {
            image: dl_blender,
            name: "Simple Photorealism",
            link_github: "https://github.com/Draqii/Simple-Photorealism",
            link_download: "https://github.com/Draqii/Simple-Photorealism/archive/refs/heads/main.zip"
        },
    ]

    const web_boilerplates = [
        {
            image: dl_blank,
            name: "Website Frontend",
            link_github: "",
            link_download: ""
        },
        {
            image: dl_blank,
            name: "Website Backend",
            link_github: "",
            link_download: ""
        },
        {
            image: dl_blank,
            name: "Component Library",
            link_github: "",
            link_download: ""
        },
    ]

    const discord_bots = [
        {
            image: dl_bot1,
            name: "Dice Rolling Bot",
            link_invite: "https://discord.com/oauth2/authorize?client_id=1099491164614295603",
            link_clipboard: "https://discord.com/oauth2/authorize?client_id=1099491164614295603"
        },
        {
            image: dl_bot2,
            name: "RPG And Social Bot",
            link_invite: "https://discord.com/oauth2/authorize?client_id=892762630597509142",
            link_clipboard: "https://discord.com/oauth2/authorize?client_id=892762630597509142"
        },
        {
            image: dl_bot3,
            name: "Roles Management Bot",
            link_invite: "https://discord.com/oauth2/authorize?client_id=1323068842783670363",
            link_clipboard: "https://discord.com/oauth2/authorize?client_id=1323068842783670363"
        },
    ]

    useEffect(() => {
        let main_title = "DraqonDevelops"
        let sub_title = "Discord Bots"
        document.title = sub_title + " - " + main_title
    }, [])

    return (
        <div className={setClass("hw_downloads hw_sections", [theme], className)}>
            <Heading
                className="hw_downloads__heading"
                children={"My Discord Bots"}
                size={"xxlarge"}
                theme={theme} />
            <Paragraph
                className="hw_downloads__text"
                children={"Feel free To Invite My Discord Bots onto your servers! They are minimalistic and single purpose, and we don’t store data."}
                size={"medium"}
                theme={theme} />
            <div className="hw_downloads__sectionitems">
                {discord_bots.map((discord_bot, discord_botID) => 
                <div className="hw_downloads__sectionitem">
                    <Heading
                        className="hw_downloads__sectionheading"
                        children={discord_bot.name}
                        size={"medium"}
                        theme={theme} />
                    <Image 
                        className="hw_downloads__sectionimg"
                        src={discord_bot.image} 
                        alt={""} 
                        theme={"light"} />

                    <div className="hw_downloads__sectionlinks">
                        <Link 
                            className="hw_downloads__sectionlink"
                            to={discord_bot.link_invite}
                            isInternal={false} 
                            children={"Invite To Server!"} 
                            target={"_blank"}
                            theme={theme} />
                        <Link 
                            className="hw_downloads__sectionlink"
                            to={discord_bot.link_clipboard}
                            isInternal={false} 
                            children={"Clipboard Copy!"} 
                            copyLink={discord_bot.link_clipboard}
                            target={"_self"}
                            theme={theme} />
                    </div>
                </div>)}
            </div>
            {/*<section className="hw_downloads__section">
                <Heading
                    className="hw_downloads__heading"
                    children={"My Blender Addons"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_downloads__text"
                    children={"Blender is a 3D creation software that I created a few addons for. They are for my own workflows, but you can use em"}
                    size={"medium"}
                    theme={theme} />
                <div className="hw_downloads__sectionitems">
                    {bl_addons.map((bl_addon, bl_addonID) =>
                    <div className="hw_downloads__sectionitem">
                        <Heading
                            className="hw_downloads__sectionheading"
                            children={bl_addon.name}
                            size={"medium"}
                            theme={theme} />
                        <Image 
                            className="hw_downloads__sectionimg"
                            src={bl_addon.image} 
                            alt={""} 
                            theme={"light"} />
                        <div className="hw_downloads__sectionlinks">
                            <Link 
                                className="hw_downloads__sectionlink"
                                to={bl_addon.link_github}
                                isInternal={false} 
                                children={"Visit On GitHub!"} 
                                target={"_blank"}
                                theme={theme} />
                            <Link 
                                className="hw_downloads__sectionlink"
                                to={bl_addon.link_download}
                                isInternal={false} 
                                filename={bl_addon.name.split(' ').join("_").toLowerCase()}
                                children={"Download .zip!"} 
                                target={"_self"}
                                theme={theme} />
                        </div>
                    </div>)}
                </div>
            </section>*/}
        </div>
    )
}

export default Downloads

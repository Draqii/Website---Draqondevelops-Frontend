import React from "react";
import { setClass } from "../../modules/setClass";
import { DownloadsProps } from "./Downloads.types";
import texts from "./Downloads.json"
import dl_bot1 from "../../../public/images/dl_bot1.png"
import dl_bot2 from "../../../public/images/dl_bot2.png"
import dl_bot3 from "../../../public/images/dl_bot3.png"
import dl_blender from "../../../public/images/dl_blender.png"
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
            image: dl_blender, 
            name: "Website Frontend", 
            link_git: "", 
            link_dl: "" 
        },
        { 
            image: dl_blender, 
            name: "Website Backend", 
            link_git: "", 
            link_dl: "" 
        },
        { 
            image: dl_blender, 
            name: "Component Library", 
            link_git: "", 
            link_dl: "" 
        },
    ]

    const web_packages = [
        { 
            image: dl_blender, 
            name: "Awesome Nite Switch", 
            link_git: "https://github.com/Draqii/NiteSwitch", 
            link_npm: "npm install --save-dev @latest nite-switch", 
            link_dl: "https://github.com/Draqii/NiteSwitch/archive/refs/heads/main.zip" 
        },
        { 
            image: dl_blender, 
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
            <Heading className="hw_webdev__title" children={"Download Section!"} size={"xxlarge"} theme={"light"} />
            <div className="hw_webdev__content">
                <div className="hw_webdev__firstcontent">
                    <section className="hw_section__details">
                        <Heading children={"Follow Me On GitHub"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>I’m on github so feel free to look around and follow me if you like- you can also make pull requests to my projects-</Paragraph>
                        <a children="Visit Me On GitHub" className="hw_button hw_text hw_link" href="https://github.com/Draqii" target="blank" />
                    </section>
                    <section className="hw_section__details">
                        <Heading children={"My Blender Addons!"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>Blender is a 3D creation software that I created a few addons for. They are for my own workflows, but you can use em!</Paragraph>
                        <div>
                            {bl_addons.map((bl_addon, id) => 
                            <div className="hw_trackmania__skin">
                                <Paragraph size={"medium"} theme={"light"}>{bl_addon.name}</Paragraph>
                                <Image src={bl_addon.image} alt={""} theme={"light"} />
                                <div>
                                    <a children="Visit On GitHub" className="hw_button hw_text hw_link" href={bl_addon.link_git} target="blank" />
                                    <a children="Download as .zip" className="hw_button hw_text hw_link" href={bl_addon.link_dl} download />
                                </div>
                            </div>)}
                        </div>
                    </section>
                </div>
                <div className="hw_webdev__firstcontent">
                    <section className="hw_section__details">
                        <Heading children={"My Web Boilerplates"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>yaaa-</Paragraph>
                        <div>
                            {web_boilerplates.map((web_boilerplate, id) => 
                            <div className="hw_trackmania__skin">
                                <Paragraph size={"medium"} theme={"light"}>{web_boilerplate.name}</Paragraph>
                                <Image src={web_boilerplate.image} alt={""} theme={"light"} />
                                <div>
                                    <a children="Visit On GitHub" className="hw_button hw_text hw_link" href={web_boilerplate.link_git} target="blank" />
                                    <a children="Download as .zip" className="hw_button hw_text hw_link" href={web_boilerplate.link_dl} download />
                                </div>
                            </div>)}
                        </div>
                    </section>
                    <section className="hw_section__details">
                        <Heading children={"My Web Packages!"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>yaaa-</Paragraph>
                        <div>
                            {web_packages.map((web_package, id) => 
                            <div className="hw_trackmania__skin">
                                <Paragraph size={"medium"} theme={"light"}>{web_package.name}</Paragraph>
                                <Image src={web_package.image} alt={""} theme={"light"} />
                                <div>
                                    <a children="Visit On GitHub" className="hw_button hw_text hw_link" href={web_package.link_git} target="blank" />
                                    <a children="Download .zip" className="hw_button hw_text hw_link" href={web_package.link_dl} download />
                                    <a children="Copy npm link" className="hw_button hw_text hw_link" href={web_package.link_npm} target="blank" />
                                </div>
                            </div>)}
                        </div>
                    </section>
                </div>
                <div className="hw_webdev__firstcontent">
                    <section className="hw_section__details">
                        <Heading children={"My Discord Bots"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>Feel free To Invite My Discord Bots onto your servers! They are minimalistic and single purpose, and we don’t store data.-</Paragraph>
                        <div>
                            {discord_bots.map((discord_bot, id) => 
                            <div className="hw_trackmania__skin">
                                <Paragraph size={"medium"} theme={"light"}>{discord_bot.name}</Paragraph>
                                <Image src={discord_bot.image} alt={""} theme={"light"} />
                                <div>
                                    <a children="Invite To Discord" className="hw_button hw_text hw_link" href={discord_bot.link} target="blank" />
                                </div>
                            </div>)}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Downloads

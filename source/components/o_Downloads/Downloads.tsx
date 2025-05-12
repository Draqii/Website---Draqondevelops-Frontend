import React from "react";
import { setClass } from "../../modules/setClass";
import { DownloadsProps } from "./Downloads.types";
import texts from "./Downloads.json"
import tm_club from "../../../public/images/tm_map1.png"
import { Heading, Paragraph, Button, Image } from "da-awesome-library/build";
import "./Downloads.scss";

const Downloads = ({ language, theme, className }: DownloadsProps) => {

    const bl_addons = [
        { image: tm_club, name: "Simple Photorealism", link: "" },
    ]

    const web_boilerplates = [
        { image: tm_club, name: "Website Frontend", link: "" },
        { image: tm_club, name: "Website Backend", link: "" },
        { image: tm_club, name: "Component Library", link: "" },
    ]

    const web_packages = [
        { image: tm_club, name: "Awesome Nite Switch", link: "" },
        { image: tm_club, name: "Component Library", link: "" }
    ]

    const discord_bots = [
        { image: tm_club, name: "Dice Rolling Bot", link: "" },
        { image: tm_club, name: "Roles Management Bot", link: "" },
        { image: tm_club, name: "RPG And Social Bot", link: "" },
    ]

    const download = (url) => {

    }

    return (
        <div className={setClass("hw_downloads", [theme], className)}>
            <Heading className="hw_webdev__title" children={"Download Section!"} size={"xxlarge"} theme={"light"} />
            <div className="hw_webdev__content">
                <div className="hw_webdev__firstcontent">
                    <section className="hw_section__details">
                        <Heading children={"Follow Me On GitHub"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>I’m on github so feel free to look around and follow me if you like- you can also make pull requests to my projects-</Paragraph>
                        <Button isEnabled={true} children={"Visit My GitHub"} isPrimary={false} theme={"light"} onClick={() => null} />
                    </section>
                    <section className="hw_section__details">
                        <Heading children={"My Blender Addons!"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>Blender is a 3D creation software that I created a few addons for. They are for my own workflows, but you can use em!</Paragraph>
                        <div>
                            {bl_addons.map((bl_addon, id) => 
                            <div className="hw_trackmania__skin">
                                <Paragraph size={"medium"} theme={"light"}>{bl_addon.name}</Paragraph>
                                <Image src={bl_addon.image} alt={""} theme={"light"} />
                                <Button isEnabled={true} children={"Invite To Discord"} onClick={() => download(bl_addon.link)} theme={"light"} isPrimary={false} />
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
                                <Button isEnabled={true} children={"Invite To Discord"} onClick={() => download(web_boilerplate.link)} theme={"light"} isPrimary={false} />
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
                                <Button isEnabled={true} children={"Invite To Discord"} onClick={() => download(web_package.link)} theme={"light"} isPrimary={false} />
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
                                <Button isEnabled={true} children={"Invite To Discord"} onClick={() => download(discord_bot.link)} theme={"light"} isPrimary={false} />
                            </div>)}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Downloads

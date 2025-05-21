import React from "react";
import { setClass } from "../../modules/setClass";
import { FooterProps } from "./Footer.types";
import texts from "./Footer.json"
import logo_discord from "../../../public/images/logo_discord.png"
import logo_facebook from "../../../public/images/logo_facebook.png"
import logo_instagram from "../../../public/images/logo_instagram.png"
import logo_twitch from "../../../public/images/logo_twitch.png"
import logo_youtube from "../../../public/images/logo_youtube.png"
import ScrollBack from "../m_ScrollBack/ScrollBack";
import { Image, Paragraph } from "da-awesome-library/build";
import "./Footer.scss";

const Footer = ({language, theme, className}: FooterProps) => {

    return (
        <footer className={setClass("hw_footer", [theme], className)}>
            <section className="hw_footer__scrollback">
                <ScrollBack 
                    language="english" 
                    theme="light" />
            </section>
            <section className="hw_footer__copyright">
                <Paragraph 
                    children={"© Draqii 2020-2024"}
                    size={"small"} 
                    theme={"light"} />
            </section>
            <section className="hw_footer__socials">
                <Image 
                    src={logo_discord} 
                    alt={""} 
                    theme={"light"} />
                <Image 
                    src={logo_instagram} 
                    alt={""} 
                    theme={"light"} />
                <Image 
                    src={logo_twitch} 
                    alt={""} 
                    theme={"light"} />
                <Image 
                    src={logo_youtube} 
                    alt={""} 
                    theme={"light"} />
            </section>
        </footer>
    )
}

export default Footer

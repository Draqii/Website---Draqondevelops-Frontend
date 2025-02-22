import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import useCookie, { setItem } from "../../modules/hooks/useCookie"
import { Image, Header, Footer, Icon, Main, Heading, Section } from "da-awesome-library/build"
import { NiteSwitch } from "niteswitch"
import pageicon from "../../../public/favicon/page_icon.png"
import HomeIcon from "../../../public/svgs/home.svg"
import Home from "../p_Home/Home";
import Projects from "../p_Projects/Projects";
import Donate from "../p_Donate/Donate";
import Contact from "../p_Contact/Contact";
import TermsAndConditions from "../p_TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../p_PrivacyPolicy/PrivacyPolicy";
import social_discord from "../../../public/images/social_discord.png"
import social_facebook from "../../../public/images/social_facebook.png"
import social_instagram from "../../../public/images/social_instagram.png"
import social_twitch from "../../../public/images/social_twitch.png"
import social_youtube from "../../../public/images/social_youtube.png"
import tech_angelscript from "../../../public/images/tech_angelscript.png"
import tech_babel from "../../../public/images/tech_babel.png"
import tech_blender from "../../../public/images/tech_blender.png"
import tech_css from "../../../public/images/tech_css.png"
import tech_gitlab from "../../../public/images/tech_gitlab.png"
import tech_html from "../../../public/images/tech_html.png"
import tech_js from "../../../public/images/tech_js.png"
import tech_mongo from "../../../public/images/tech_mongo.png"
import tech_npm from "../../../public/images/tech_npm.png"
import tech_python from "../../../public/images/tech_python.png"
import tech_react from "../../../public/images/tech_react.png"
import tech_sass from "../../../public/images/tech_sass.png"
import tech_storybook from "../../../public/images/tech_storybook.png"
import tech_typescript from "../../../public/images/tech_typescript.png"
import tech_vsc from "../../../public/images/tech_vsc.png"
import tech_webpack from "../../../public/images/tech_webpack.png"
import Hire from "../p_Hire/Hire";
import "./App.scss";
import NotFound from "../p_NotFound/NotFound";
import Welcome from "../p_Welcome/Welcome";

const App = () => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0] === "light")
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])
    
    const updateTheme = (isLight) => {
        setItem("hw_lightmode", isLight ? "light" : "dark", 360)
        setTheme(isLight)
    }
    
    const updateLanguage = (language) => {
        setItem("hw_language", language, 360)
        setLanguage(language)
    }

    const getTheme = () => theme ? "light" : "dark"

    return (
        <div className={setClass("hw_page", [getTheme()])}>
            <NiteSwitch 
                enabled={theme ? true : false} 
                _setEnabled={setTheme}
                onEnable={() => updateTheme(true)} 
                onDisable={() => updateTheme(false)}
            />
            <Header 
                theme={getTheme()}
                ReactLink={NavLink}
                navigation_links={[
                {to: "/", content: <Icon ReactSVG={HomeIcon} />},
                {to: "/projects", content: "Projects"},
                {to: "/charity", content: "Charity"},
                {to: "/hire-me", content: "Hire"},
                {to: "/contact", content: "Contact"},
            ]} logo_text={
                <span><span>Draqon</span><br/>
                <span className="hw_logo__secondary">Develops</span></span>
            } logo_image={pageicon} />
            <Main>
                <Routes>
                    <Route path="/" Component={() => <Home theme={getTheme()} />} />
                    <Route path="/projects" Component={() => <Projects theme={getTheme()} />} />
                    <Route path="/contact" Component={() => <Contact theme={getTheme()} />} />
                    <Route path="/donate" Component={() => <Donate theme={getTheme()} />} />
                    <Route path="/hire-me" Component={() => <Hire theme={getTheme()} />} />
                    <Route path="/terms-and-conditions" Component={() => <TermsAndConditions theme={getTheme()} />} />
                    <Route path="/privacy-policy" Component={() => <PrivacyPolicy theme={getTheme()} />} />
                    <Route path="/contact-us" Component={() => <Contact theme={getTheme()} />} />
                    <Route path="/welcome" Component={() => <Welcome theme={getTheme()} />} />
                    <Route path="/*" Component={() => <NotFound theme={getTheme()} />} />
                </Routes>
            </Main>
            <Footer 
                theme={getTheme()}
                copyrightHolder={"DraqonDevelops"} 
                copyrightYear={"2020-2024"} 
                ReactLink={NavLink}
                navigation_links={[
                {to: "/terms-and-conditions", content: "Terms & Conditions"},
                {to: "/privacy-policy", content: "Privacy Policy"},
                {to: "/contact-us", content: "Contact Me"},
                ]} 
                content={<Section className="hw_footer__content" direction={"column"} wrap={"wrap"} gap={"medium"}>
                    <SocialMedia theme={getTheme()} />
                    <PoweredBy theme={getTheme()} />
                </Section>} />
        </div>
    )
}

const SocialMedia = ({theme, className}: any  ) => {

    const social_icons = [
        social_instagram,
        social_discord,
        social_facebook,
        social_twitch,
        social_youtube
    ]

    return(
        <Section direction={"column"} wrap={"wrap"} gap={"medium"} className={setClass("hw_socialmedia", [theme], className)}>
            <Heading theme={theme} size={"small"} content="follow my socials" />
            <Section className="hw_icons" direction={"row"} wrap={"wrap"} gap={"medium"}>
                {social_icons.map((icon, index) => <Image source={icon} />)}
            </Section>
        </Section>
    )
}

const PoweredBy = ({theme, className}: any  ) => {

    const tech_icons = [
        tech_html,
        tech_css,
        tech_js,
        tech_sass,
        tech_storybook,
        social_discord,
        tech_typescript,
        tech_webpack,
        tech_mongo,
        tech_vsc,
        tech_gitlab,
        tech_react,
        tech_blender,
        tech_angelscript,
        tech_npm,
        tech_babel,
        tech_python
    ]

    return(
        <Section direction={"column"} wrap={"wrap"} gap={"medium"} className={setClass("hw_poweredby", [theme], className)}>
            <Heading theme={theme} size={"small"} content="powered by" />
            <Section className="hw_icons" direction={"row"} wrap={"wrap"} gap={"medium"}>
                {tech_icons.map((icon, index) => <Image source={icon} />)}
            </Section>
        </Section>
    )
}

export default App
import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ScrollBackProps } from "./ScrollBack.types";
import { Text, Icon } from "da-awesome-library/build"
import SVG_Scrollback from "../../../public/svgs/scrollback.svg"
import texts from "./ScrollBack.json"
import "./ScrollBack.scss";

const ScrollBack = ({language, theme, className}: ScrollBackProps) => {

    const [scrollDirection, setScrollDirection] = useState(window.pageYOffset > 0 ? "Back" : "Down")

    const scrollToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: window.pageYOffset > 0 ? 0 : window.innerHeight
        })
    }

    useEffect(() => {
        const handleScroll = () => setScrollDirection(window.pageYOffset > 0 ? "Back" : "Down");
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div onClick={scrollToTop} className={setClass("hw_scrollback", [theme], className)}>
            <Icon 
                theme={theme === "light" ? "dark" : "light"} 
                className={"hw_scrollback__icon " + "hw_scrollback__" + scrollDirection }
                ReactSVG={SVG_Scrollback} />
            <div className="hw_scrollback__textcontainer">
            <Text 
                size="small"
                className="hw_scrollback__text" 
                theme={theme === "light" ? "dark" : "light"}
                >{texts[language]["text1"]}</Text>
            <Text 
                size="small"
                className="hw_scrollback__text" 
                theme={theme === "light" ? "dark" : "light"}
                >{scrollDirection}</Text>
            </div>
        </div>
    )
}

export default ScrollBack

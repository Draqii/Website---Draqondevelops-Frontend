import React from "react";
import { setClass } from "../../modules/setClass";
import { HeaderProps } from "./Header.types";
import { Link, Image, Icon } from "da-awesome-library/build";
import texts from "./Header.json"
import Gears from "../../../public/svgs/gears.svg"
import Logo from "../m_Logo/Logo";
import "./Header.scss";
import { useNavigate } from "react-router-dom";


const Header = ({language, theme, className}: HeaderProps) => {

    const navigate = useNavigate()

    return (
        <div className={setClass("hw_header", [theme], className)}>
            <Logo />
            <nav className="hw_navigation">
                <Icon onClick={() => navigate("/settings")} ReactSVG={Gears} theme={"light"} />
            </nav>
        </div>
    )
}

export default Header

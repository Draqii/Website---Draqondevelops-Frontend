import React from "react";
import { setClass } from "../../modules/setClass";
import { LogoProps } from "./Logo.types";
import { useNavigate } from "react-router-dom";
import texts from "./Logo.json"
import img_logo from "../../../public/favicon/page_icon.png"
import { Image, Paragraph } from "da-awesome-library/build";
import "./Logo.scss";

const Logo = ({language, theme, className}: LogoProps) => {

    const navigate = useNavigate()

    const _onClick = () => {
        navigate("/")
    }

    return (
        <div onClick={_onClick} className={setClass("hw_logo", [theme], className)}>
            <Image className="hw_logo__image" src={img_logo} alt={""} theme={"light"} />
            <Paragraph className="hw_logo__text" size={"small"} theme={"light"}>Draqon<br/>Develops</Paragraph>
        </div>
    )
}

export default Logo

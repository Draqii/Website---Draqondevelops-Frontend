import React from "react";
import { setClass } from "../../modules/setClass";
import { MainProps } from "./Main.types";
import texts from "./Main.json"
import "./Main.scss";

const Main = ({language, theme, className}: MainProps) => {

    return (
        <div className={setClass("hw_main", [theme], className)}>
            main
        </div>
    )
}

export default Main

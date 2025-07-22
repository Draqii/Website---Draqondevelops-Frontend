import React from "react";
import { setClass } from "../../modules/setClass";
import { MainBottomProps } from "./MainBottom.types";
import texts from "./MainBottom.json"
import "./MainBottom.scss";

const MainBottom = ({component, language, theme, className}: MainBottomProps) => {
        
    return (
        <div className={setClass("hw_mainbottom", [theme], className)}>
            {component}
        </div>
    )
}

export default MainBottom

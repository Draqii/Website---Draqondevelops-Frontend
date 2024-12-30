import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { DonateProps } from "./Donate.types";
import { Heading } from "da-awesome-library/build";
import "./Donate.scss";

const Donate = ({ theme, className }: DonateProps) => {

    useEffect(() => {
        document.title = "Donate Me - DraqonDevelops.com"
    }, [])

    return (
        <div className={setClass("hw_donate hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Donate To Support My Work"} />
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="PVSZFHE2HMS2W" />
                <input type="image" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Spenden mit dem PayPal-Button" />
                <img alt="" src="https://www.paypal.com/de_DE/i/scr/pixel.gif" width="1" height="1" />
            </form>

        </div>
    )
}

export default Donate

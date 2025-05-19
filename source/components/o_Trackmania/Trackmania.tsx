import React from "react";
import { setClass } from "../../modules/setClass";
import { TrackmaniaProps } from "./Trackmania.types";
import { Button, Heading, Image, Link, Paragraph } from "da-awesome-library/build";
import section_race from "../../../public/images/section_race.png"
import tm_club from "../../../public/images/tm_club.png"
import tm_map1 from "../../../public/images/tm_map1.png"
import tm_map2 from "../../../public/images/tm_map2.png"
import tm_map3 from "../../../public/images/tm_map3.png"
import tm_skin1 from "../../../public/images/tm_skin1.png"
import tm_skin2 from "../../../public/images/tm_skin2.png"
import tm_skin3 from "../../../public/images/tm_skin3.png"
import tm_match1 from "../../../public/images/tm_match1.png"
import tm_match2 from "../../../public/images/tm_match2.png"
import tm_ranking from "../../../public/images/tm_ranking.png"
import texts from "./Trackmania.json"
import "./Trackmania.scss";

const Trackmania = ({ language, theme, className }: TrackmaniaProps) => {

    const matches = [
        { image: tm_match1 },
        { image: tm_match2 },
    ]

    const skins = [
        { image: tm_skin1, name: "Stadium_RAD", link: "/zip/Stadium_RAD.zip" },
        { image: tm_skin2, name: "Stadium_uwu_v1", link: "/zip/Stadium_UwU_v1.zip" },
        { image: tm_skin3, name: "Stadium_uwu_v2", link: "/zip/Stadium_UwU_v2.zip" },
    ]

    const maps = [
        { image: tm_map1, name: "Glacial Campsite", link: "https://trackmania.exchange/mapshow/243892" },
        { image: tm_map2, name: "Blossom Hills", link: "https://trackmania.exchange/mapshow/243893" },
        //{ image: tm_map3, name: "Draqonic Arena", link: "" },
    ]

    const rank = ({
        image: tm_ranking
    })

    const club = ({
        image: tm_club
    })

    return (
        <div className={setClass("hw_trackmania", [theme], className)}>
            <Heading
                className="hw_trackmania__title"
                children={"Trackmania Related Stuff"}
                size={"teaser"}
                theme={theme} />
        </div>
    )
}

export default Trackmania
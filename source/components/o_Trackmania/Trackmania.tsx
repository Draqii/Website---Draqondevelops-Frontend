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

            <section className="hw_trackmania__section">
                <Heading
                    className="hw_trackmania__heading"
                    children={"Join The [BONK] Club!"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_trackmania__text"
                    children={"Join the [BONK] Club and race against our times, or play with us in ranked and tournaments. Our club is open for everyone."}
                    size={"medium"}
                    theme={theme} />
            </section>
            
            <section className="hw_trackmania__section">
                <Heading
                    className="hw_trackmania__heading"
                    children={"World Tour Villians!"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_trackmania__text"
                    children={"I’m currently playing as starter player for Villian in the 2025 World Tour. See our latest matches and ranking here!"}
                    size={"medium"}
                    theme={theme} />
                <div className="hw_trackmania__sectionitems">
                    {matches.map((match, matchID) =>
                    <Image 
                        className="hw_trackmania__matchimage"
                        src={match.image} 
                        alt={""} 
                        theme={"light"} />)}
                </div>
            </section>

            <section className="hw_trackmania__section">
                <Heading
                    className="hw_trackmania__heading"
                    children={"Race My Campaign!"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_trackmania__text"
                    children={"Feel free to explore and race on all my maps. To install them, follow the TMX link and move the downloaded .map into the maps/downloaded folder and play :)"}
                    size={"medium"}
                    theme={theme} />
                <div className="hw_trackmania__sectionitems">
                    {maps.map((map, mapID) =>
                    <Image 
                        className="hw_trackmania__matchimage"
                        src={map.image} 
                        alt={""} 
                        theme={"light"} />)}
                </div>
            </section>

            <section className="hw_trackmania__section">
                <Heading
                    className="hw_trackmania__heading"
                    children={"Download My Skins!"}
                    size={"xxlarge"}
                    theme={theme} />
                <Paragraph
                    className="hw_trackmania__text"
                    children={"Feel free to download and use my skins if you like. To install them, move the downloaded .zip into the skins/models/carsport folder and then upload ingame."}
                    size={"medium"}
                    theme={theme} />
                <div className="hw_trackmania__sectionitems">
                    {skins.map((skin, skinID) =>
                    <Image 
                        className="hw_trackmania__matchimage"
                        src={skin.image} 
                        alt={""} 
                        theme={"light"} />)}
                </div>
            </section>
        </div>
    )
}

export default Trackmania
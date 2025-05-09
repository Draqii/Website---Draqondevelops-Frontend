import React from "react";
import { setClass } from "../../modules/setClass";
import { TrackmaniaProps } from "./Trackmania.types";
import { Button, Heading, Image, Link, Paragraph } from "da-awesome-library/build";
import section_race from "../../../public/images/section_race.png"
import tm_club from "../../../public/images/tm_club.png"
import tm_map1 from "../../../public/images/tm_map1.png"
import tm_map2 from "../../../public/images/tm_map2.png"
import tm_map3 from "../../../public/images/tm_map1.png"
import tm_skin1 from "../../../public/images/tm_skin1.png"
import tm_skin2 from "../../../public/images/tm_skin2.png"
import tm_skin3 from "../../../public/images/tm_skin3.png"
import tm_match1 from "../../../public/images/tm_match1.png"
import tm_match2 from "../../../public/images/tm_match2.png"
import tm_ranking  from "../../../public/images/tm_ranking.png"
import texts from "./Trackmania.json"
import "./Trackmania.scss";

const Trackmania = ({language, theme, className}: TrackmaniaProps) => {

    const matches = [
        { image: tm_match1 },
        { image: tm_match2 },
    ]

    const skins = [
        { image: tm_skin1, name: "Stadium_RAD", link: "" },
        { image: tm_skin2, name: "Stadium_uwu_v1", link: "" },
        { image: tm_skin3, name: "Stadium_uwu_v2", link: "" },
    ]
    
    const maps = [
        { image: tm_map1, name: "Glacial Campsite", link: "" },
        { image: tm_map2, name: "Blossom Hills", link: "" },
        { image: tm_map3, name: "Draqonic Arena", link: "" },
    ]

    const rank = ({
        image: tm_ranking
    })

    const club = ({
        image: tm_club
    })

    const download = (link) => {

    }

    return (
        <div className={setClass("hw_trackmania", [theme], className)}>
            <Image className="hw_trackmania__transition" src={section_race} alt={""} theme={"light"} />
            <Heading className="hw_trackmania__title" children={"Trackmania Related Stuff!"} size={"xxlarge"} theme={"light"} />
            <div className="hw_trackmania__content">
                <div className="hw_section__detailsinner">
                    <div className="hw_section__detailsinner">
                        <Heading children={"Join The [BONK] Club!"} size={"xlarge"} theme={"light"} />
                        <div className="hw_trackmania__club">
                            <Image src={club.image} alt={""} theme={"light"} />
                            <Paragraph size={"medium"} theme={"light"}>Join the [BONK] Club and race against our times, or play with us in ranked and tournaments. Our club is open for everyone.</Paragraph>
                        </div>
                    </div>
                    <div className="hw_section__detailsinner">
                        <Heading children={"World Tour Villians!"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>I’m currently playing as starter player for Villian in the 2025 World Tour. See our latest matches and ranking here!</Paragraph>
                        <br/>
                        {matches.map((match, id) => <Image src={match.image} alt={""} theme={"light"} />)}
                        <div className="hw_trackmania__rank">
                            <Paragraph size={"medium"} theme={"light"}>Our Ranking Now:<br/>(1 of 8 Played)</Paragraph>
                            <Image src={rank.image} alt={""} theme={"light"} />
                    </div>
                    </div>
                </div>
                <div className="hw_section__detailsinner">
                    <Heading children={"Race My Campaign!"} size={"xlarge"} theme={"light"} />
                    <Paragraph size={"medium"} theme={"light"}>Feel free to explore and race on all my maps. To install them, follow the TMX link and move the downloaded .map into the maps/downloaded folder and play :)</Paragraph>
                    <br/>
                    {maps.map((map, id) => <div className="hw_trackmania__map">
                        <Paragraph size={"medium"} theme={"light"}>{map.name}</Paragraph>
                        <Image src={map.image} alt={""} theme={"light"} />
                        <Link children={"Visit On TMX"} isInternal={false} to={map.link} theme={"light"} />
                    </div>)}
                </div>
                <div className="hw_section__detailsinner">
                    <Heading children={"Download My Skins!"} size={"xlarge"} theme={"light"} />
                    <Paragraph size={"medium"} theme={"light"}>Feel free to download and use my skins if you like. To install them, move the downloaded .zip into the skins/models/carsport folder and then upload ingame.</Paragraph>
                    <br/>
                    {skins.map((skin, id) => <div className="hw_trackmania__skin">
                        <Paragraph size={"medium"} theme={"light"}>{skin.name}</Paragraph>
                        <Image src={skin.image} alt={""} theme={"light"} />
                        <Button isEnabled={true} children={"Download Skin"} onClick={() => download(skin.link)} theme={"light"} isPrimary={false} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Trackmania

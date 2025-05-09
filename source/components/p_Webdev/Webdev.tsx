import React from "react";
import { setClass } from "../../modules/setClass";
import { WebdevProps } from "./Webdev.types";
import texts from "./Webdev.json"
import { Button, Heading, Paragraph } from "da-awesome-library/build";
import "./Webdev.scss";

const Webdev = ({language, theme, className}: WebdevProps) => {

    return (
        <div className={setClass("hw_webdev", [theme], className)}>
            <Heading className="hw_webdev__title" children={"Design And Web Development!"} size={"xxlarge"} theme={"light"} />
            <div className="hw_webdev__content">
                <div className="hw_webdev__firstcontent">
                    <section className="hw_section__details">
                        <Heading children={"My Icon Library"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>Check my Icon library for Icons to use for yourself and your brand or project or just as inspiration- All made by me-</Paragraph>
                        <Button isEnabled={true} children={"See More Of My Library"} isPrimary={false} theme={"light"} onClick={() => null} />
                    </section>         
                    <section className="hw_section__details">
                        <Heading children={"My Websites!"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>If you’re curious about my other projects and websites, see below and browse around for a bit!</Paragraph>
                        <Button isEnabled={true} children={"Click Me!"} isPrimary={false} theme={"light"} onClick={() => null} />
                    </section>
                </div>         
                <div className="hw_webdev__secondcontent">
                    <section className="hw_section__details">
                        <Heading children={"I Own Hatching Wonders, A Creative Agency!"} size={"xlarge"} theme={"light"} />
                        <Paragraph size={"medium"} theme={"light"}>I own a small creative agency Hatching Wonders, In which I can tackle projects for clients in a small team while keeping creative control, opposed to tackling them alone. If you therefor would like to request collaboration, help, or want to get pitched, please check the sections below.</Paragraph>
                    </section>         
                    <div className="hw_webdev__innercontent">
                        <section className="hw_section__details">
                            <Heading children={"We Take Inquiries!"} size={"xlarge"} theme={"light"} />
                            <Paragraph size={"medium"} theme={"light"}>Web Design & Development</Paragraph>
                            <Button isEnabled={true} children={"Click Me!"} isPrimary={false} theme={"light"} onClick={() => null} />
                        </section>         
                        <section className="hw_section__details">
                            <Heading children={"Let Us Pitch You!"} size={"xlarge"} theme={"light"} />
                            <Paragraph size={"medium"} theme={"light"}>Web Design & Development</Paragraph>
                            <Button isEnabled={true} children={"Click Me!"} isPrimary={false} theme={"light"} onClick={() => null} />
                        </section>         
                    </div>         
                </div>         
            </div>         
        </div>
    )
}

export default Webdev

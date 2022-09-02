import crew from "./crew.module.scss";
import Nav from "../components/nav";
import image1 from "../assets/crew/image-douglas-hurley.png";
import image2 from "../assets/crew/image-mark-shuttleworth.png";
import image3 from "../assets/crew/image-victor-glover.png";
import image4 from "../assets/crew/image-anousheh-ansari.png";
import { useState } from "react";
function Crew() {
    let sources = [
        {
            role: "Commander",
            name: "DOUGLAS HURLEY",
            description:
                " Douglas Gerald Hurley is an American engineer,former Marine Corps pilot and former NASA astronaut.He launched into space for the third time ascommander of Crew Dragon Demo-2.",
            image: image1,
        },
        {
            role: "Mission Specialist",
            name: "Mark Shuttleworth",
            description:
                " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South  African to travel to space as a space tourist.",
            image: image2,
        },
        {
            role: "Pilot",
            name: " Victor Glover",
            description:
                "  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
            image: image3,
        },
        {
            role: "Flight Engineer",
            name: " Anousheh Ansari",
            description:
                " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
            image: image4,
        },
    ];
    let [activeSource, setActiveSource] = useState(sources[0]);
    const source1 = () => {
        setActiveSource(sources[0]);
    };
    const source2 = () => {
        setActiveSource(sources[1]);
    };
    const source3 = () => {
        setActiveSource(sources[2]);
    };
    const source4 = () => {
        setActiveSource(sources[3]);
    };
    return (
        <section className={crew.section}>
            <Nav />
            <p className={crew.meet}>02 MEET YOUR CREW</p>
            <div className={crew.container}>
                <div className={crew.firstCollumn}>
                    {/* inverted on mobile screens */}
                    <div className={crew.invertDiv}>
                        <p className={crew.role}>{activeSource.role}</p>
                        <span className={crew.hugeText}>
                            {activeSource.name}
                        </span>
                        {/* explainatory paragraph */}
                        <p className={crew.explain}>
                            {activeSource.description}
                        </p>
                    </div>
                    <div className={crew.tabDiv}>
                        <span
                            className={`${crew.tabs} ${
                                activeSource.role === sources[0].role
                                    ? crew.active
                                    : ""
                            }`}
                            onClick={source1}
                        ></span>
                        <span
                            className={`${crew.tabs} ${
                                activeSource.role === sources[1].role
                                    ? crew.active
                                    : ""
                            }`}
                            onClick={source2}
                        ></span>
                        <span
                            className={`${crew.tabs} ${
                                activeSource.role === sources[2].role
                                    ? crew.active
                                    : ""
                            }`}
                            onClick={source3}
                        ></span>
                        <span
                            className={`${crew.tabs} ${
                                activeSource.role === sources[3].role
                                    ? crew.active
                                    : ""
                            }`}
                            onClick={source4}
                        ></span>
                    </div>
                </div>
                <div className={crew.secondCollumn}>
                    <img src={activeSource.image} alt='a person' />
                </div>
            </div>
        </section>
    );
}

export default Crew;

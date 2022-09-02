import destinations from "./destinations.module.scss";
import Nav from "../components/nav";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { useState } from "react";
function Destinations() {
    // carousel
    let sources = [
        {
            name: "Moon",
            image: moon,
            description:
                "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 KM",
            time: "3 DAYS",
        },
        {
            name: "Mars",
            image: mars,
            description:
                "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            time: "9 months",
        },
        {
            name: "Europa",
            image: europa,
            description:
                "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: " 628 mil. km",
            time: "3 years",
        },
        {
            name: "Titan",
            image: titan,
            description:
                "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            time: "7 years",
        },
    ];
    let [activeSource, setActiveSource] = useState(sources[0]);
    const moonSource = () => {
        setActiveSource(sources[0]);
    };
    const marsSource = () => {
        setActiveSource(sources[1]);
    };
    const europaSource = () => {
        setActiveSource(sources[2]);
    };
    const titanSource = () => {
        setActiveSource(sources[3]);
    };
    return (
        <section className={destinations.section}>
            <Nav />
            <p className={destinations.meet}>01 pick your destination</p>
            <div className={destinations.container}>
                {/* first collumn */}
                <div className={destinations.firstCollumn}>
                    {/* <p>01 pick your destination</p> */}
                    <img src={activeSource.image} alt='destinations' />
                </div>
                <div className={destinations.secondCollumn}>
                    {/* caurosel */}
                    <ul className={destinations.caurosel}>
                        <li
                            className={
                                activeSource.name === "Moon"
                                    ? destinations.active
                                    : ""
                            }
                            onClick={moonSource}
                        >
                            moon
                        </li>
                        <li
                            onClick={marsSource}
                            className={
                                activeSource.name === "Mars"
                                    ? destinations.active
                                    : ""
                            }
                        >
                            mars
                        </li>
                        <li
                            onClick={europaSource}
                            className={
                                activeSource.name === "Europa"
                                    ? destinations.active
                                    : ""
                            }
                        >
                            europa
                        </li>
                        <li
                            onClick={titanSource}
                            className={
                                activeSource.name === "Titan"
                                    ? destinations.active
                                    : ""
                            }
                        >
                            titan
                        </li>
                    </ul>
                    <span className={destinations.hugeText}>
                        {activeSource.name}
                    </span>
                    {/* explainatory paragraph */}
                    <p>{activeSource.description}</p>
                    <div className={destinations.moreInfo}>
                        <div>
                            <span className={destinations.moreInfoSpan}>
                                Avg. distance
                            </span>
                            <span className={destinations.moreInfoSpanSecond}>
                                {activeSource.distance}
                            </span>
                        </div>
                        <div>
                            <span className={destinations.moreInfoSpan}>
                                Est. travel time
                            </span>
                            <span className={destinations.moreInfoSpanSecond}>
                                {activeSource.time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Destinations;

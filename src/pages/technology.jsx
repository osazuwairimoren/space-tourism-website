import technology from "./technology.module.scss";
import Nav from "../components/nav";
import image1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import image2 from "../assets/technology/image-spaceport-portrait.jpg";
import image3 from "../assets/technology/image-space-capsule-portrait.jpg";
import image1LandScape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import image2LandScape from "../assets/technology/image-spaceport-landscape.jpg";
import image3LandScape from "../assets/technology/image-space-capsule-landscape.jpg";
import { useState } from "react";
function Technology() {
    let sources = [
        {
            techName: "LAUNCH VEHICLE",
            description:
                "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,  it's quite an awe-inspiring sight on the launch pad!",
            imagePortrait: image1,
            imageLandScape: image1LandScape,
        },
        {
            techName: "SPACEPORT",
            description:
                "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            imagePortrait: image2,
            imageLandScape: image2LandScape,
        },
        {
            techName: "SPACE CAPSULE",
            description:
                "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            imagePortrait: image3,
            imageLandScape: image3LandScape,
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
    let screenWidth = window.innerWidth;
    return (
        <section className={technology.section}>
            <Nav />
            <p className={technology.meet}>03 SPACE LAUNCH 101</p>
            <div className={technology.container}>
                {/* tabs */}
                <div className={technology.firstCollumn}>
                    <div
                        className={`${technology.tab} ${
                            activeSource.techName === sources[0].techName
                                ? technology.active
                                : ""
                        }`}
                        onClick={source1}
                    >
                        1
                    </div>
                    <div
                        className={`${technology.tab} ${
                            activeSource.techName === sources[1].techName
                                ? technology.active
                                : ""
                        }`}
                        onClick={source2}
                    >
                        2
                    </div>
                    <div
                        className={`${technology.tab} ${
                            activeSource.techName === sources[2].techName
                                ? technology.active
                                : ""
                        }`}
                        onClick={source3}
                    >
                        3
                    </div>
                </div>
                <div className={technology.secondCollumn}>
                    <p className={technology.terminology}>THE TERMINOLOGY...</p>
                    <span className={technology.hugeText}>
                        {activeSource.techName}
                    </span>
                    {/* explainatory paragraph */}
                    <p className={technology.explain}>
                        {activeSource.description}
                    </p>
                </div>
                <div className={technology.thirdCollumn}>
                    <img
                        src={
                            screenWidth > 809
                                ? activeSource.imagePortrait
                                : activeSource.imageLandScape
                        }
                        alt='a rocket'
                    />
                </div>
            </div>
        </section>
    );
}

export default Technology;

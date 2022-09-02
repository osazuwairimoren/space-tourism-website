import home from "./home.module.scss";
import Nav from "../components/nav";
import { Link } from "react-router-dom";

function Home() {
    return (
        <section className={home.section}>
            <Nav />
            <div className={home.container}>
                <div className={home.firstCollumn}>
                    <p className={home.firstParagraph}>
                        So, you want to travel to
                    </p>
                    <span>space</span>
                    <p className={home.secondParagraph}>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className={home.secondCollumn}>
                    <Link to='/destinations'>
                        <button className={`btn btn-light ${home.exploreBtn}`}>
                            EXPLORE
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;

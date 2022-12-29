import './style.css'
import { ArrowDown } from "phosphor-react";

function Welcome() {
    return (
        <section id="welcome-section">
            <h1>Fernando</h1>
            <span>Front end developer</span>
            <div className="arrow-wrapper">
                <a href="#about-me-section">
                    <ArrowDown size={35} />
                </a>
            </div>

        </section>
    )
}

export default Welcome;
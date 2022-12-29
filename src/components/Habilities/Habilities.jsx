import { useState } from 'react';
import './style.css';

function Habilities() {

    return (
        <section id="habilities-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,160L40,176C80,192,160,224,240,245.3C320,267,400,277,480,256C560,235,640,181,720,149.3C800,117,880,107,960,106.7C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

            <h2>const habilidades = [</h2>
            <div id="habilities-wrapper">

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>HTML</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />

                        <div className="progress-bar html"></div>
                    </div>

                </div>

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>CSS</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />

                        <div className="progress-bar css"></div>
                    </div>

                </div>

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>Javascript</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

                        <div className="progress-bar js"></div>
                    </div>
                </div>

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>ReactJS</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                        <div className="progress-bar reactjs"></div>
                    </div>
                </div>

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>Tailwind</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />

                        <div className="progress-bar tailwind"></div>
                    </div>
                </div>

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>Git</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

                        <div className="progress-bar git"></div>
                    </div>
                </div>

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>NodeJS</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />

                        <div className="progress-bar nodejs"></div>
                    </div>
                </div>

                <div className="hability-wrapper" data-aos="flip-left">
                    <div className="hability">
                        <h3>TypeScript</h3>

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />

                        <div className="progress-bar ts"></div>
                    </div>
                </div>

            </div>
            <h2>]</h2>
        </section>
    )
}

export default Habilities;
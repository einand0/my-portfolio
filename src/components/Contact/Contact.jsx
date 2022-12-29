import './style.css'
import { LinkedinLogo, GithubLogo, At } from 'phosphor-react';

function Contact() {

    let bracket1 = "{";
    let bracket2 = "}";

    return (
        <section id="contact">
            <h2>const contato = {bracket1}</h2>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/fernandolopess/" target="_blank">
                        <LinkedinLogo size={33} />
                        <span>Linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/einand0" target="_blank">
                        <GithubLogo size={33} />
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:fernando._lopes@outlook.com" target="_blank">
                        <At size={33} />
                        <span>E-mail</span>
                    </a>
                </li>
            </ul>
            <h2>{bracket2}</h2>
        </section>
    )
}

export default Contact;
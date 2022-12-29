import './style.css'
import meImage from '../../assets/images/portfolio-image.jpg'
import config from '../../assets/config.json'


function AboutMe() {

    let bracket = "{";
    let bracket2 = "}";

    return (
        <div id="about-me-section">
            <div id="image-wrapper" data-aos="zoom-in">
                <img src={meImage} alt="me" />
                <div className="img-square"></div>
            </div>

            <div id="text-wrapper" data-aos="zoom-in">
                <h2><span>if</span>(<span>developer</span> == <span>"{config.nome}"</span>) {bracket}</h2>
                <p>{config.descricao}</p>
                <h2>{bracket2}</h2>
            </div>
        </div>
    )
}

export default AboutMe;
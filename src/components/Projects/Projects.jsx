import './style.css';
import appmoviesImage from '../../assets/images/project1.png'
import aluratubeImage from '../../assets/images/aluratube.png'
import todolistImage from '../../assets/images/todolist.png'

function Projects() {

    let bracket = "{";

    return (
        <section id="projects-section">

            <h2>projects.map(</h2>

            <div id="projects-wrapper">
                <div className="project" data-aos="fade-right">
                    <div className="project-image">
                        <img src={appmoviesImage} alt="" />
                    </div>
                    <div className="project-info">
                        <h3>App Movies</h3>
                        <p>Projeto de filmes mais populares do momento, foi criado utilizando ReactJS e colocando em prática os meus conhecimentos em Grid, Styled-components, consumo de APIs e gerenciamento de rotas com React-router-dom.</p>
                        <a href="https://app-movies-inky.vercel.app/" target="_blank">Link to</a>
                    </div>
                </div>

                <div className="project" data-aos="fade-right">
                    <div className="project-image">
                        <img src={aluratubeImage} alt="" />
                    </div>
                    <div className="project-info">
                        <h3>AluraTube</h3>
                        <p>Projeto desenvolvido durante a Imersão Alura, foi desenvolvido com ReactJS e NextJS e nele consegui desenvolver mais as minhas habilidades em Styled-components, troca de dados entre os elementos através das propriedades e aprendi sobre NextJS.</p>
                        <a href="https://aluratube-navy-five.vercel.app/" target="_blank">Link to</a>
                    </div>
                </div>

                <div className="project" data-aos="fade-right">
                    <div className="project-image">
                        <img src={todolistImage} alt="" />
                    </div>
                    <div className="project-info">
                        <h3>To Do List</h3>
                        <p>Projeto de lista de afazeres desenvolvido durante o curso de Desenvolvimento Web do ProgramadorBR, foi um dos primeiros projetos que desenvolvi e nele aprendi sobre ReactJS, componentização, props e armazenamento em cache com o localStorage.</p>
                        <a href="https://to-do-list-einand0.vercel.app/" target="_blank">Link to</a>
                    </div>
                </div>

                <button><a href="https://github.com/einand0" target="_blank">Veja mais</a></button>
                <h2>)</h2>
            </div>
        </section>
    )
}

export default Projects;
import { Button } from '../components/Button';

import LogoIMG from '../assets/img/logo.png';
import { FaConnectdevelop } from 'react-icons/fa';

import '../styles/modules.scss';

export function Modules() {
    return (
        <div id="page-modules">
            <header>
                <div className="content">
                    <img src={LogoIMG} alt="Verzel" />
                    <Button>Entrar</Button>
                </div>
            </header>

            <main>
                <div className="modules-title">
                    <h1>Módulos</h1>
                    <p>Selecione o módulo para ver as aulas disponíveis:</p>
                </div>

                <div className="modules-content">
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução e Preparatório</h1>
                            <p>3 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução a ReactJS</h1>
                            <p>15 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução NodeJS</h1>
                            <p>33 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução JavaScript</h1>
                            <p>55 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução typeScript</h1>
                            <p>5 aulas</p>
                        </div>
                    </div>
                </div>
           
                <div className="aulas-title">
                    <div className="aulas-icon">
                        <FaConnectdevelop />
                    </div>
                    <div>
                        <h1>Lógica de Programação</h1>
                        <p>Todas as aulas dísponiveis nesse módulo:</p>
                    </div>
                </div>

                <div className="aulas-content">
                    <div className="aulas-wrapper">
                        <div className="aulas-info">
                            <img src="https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png" alt="" />

                            <h1>Introdução a ReactJS</h1>

                            <p>Vamos criar uma aplicação web utilizando o React juntamento com o TypeScript e o nodeJS.</p>
                        </div>

                        <Button>Assistir aula</Button>
                    </div>
                    <div className="aulas-wrapper">
                        <div className="aulas-info">
                            <img src="https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png" alt="" />

                            <h1>Introdução a ReactJS</h1>

                            <p>Vamos criar uma aplicação web utilizando o React juntamento com o TypeScript e o nodeJS.</p>
                        </div>

                        <Button>Assistir aula</Button>
                    </div>
                    <div className="aulas-wrapper">
                        <div className="aulas-info">
                            <img src="https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png" alt="" />

                            <h1>Introdução a ReactJS</h1>

                            <p>Vamos criar uma aplicação web utilizando o React juntamento com o TypeScript e o nodeJS.</p>
                        </div>

                        <Button>Assistir aula</Button>
                    </div>
                </div>

            </main>
        </div>
    );
}
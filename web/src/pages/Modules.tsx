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
                            <p>3/3 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução e Preparatório</h1>
                            <p>3/3 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução e Preparatório</h1>
                            <p>3/3 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução e Preparatório</h1>
                            <p>3/3 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução e Preparatório</h1>
                            <p>3/3 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução e Preparatório</h1>
                            <p>3/3 aulas</p>
                        </div>
                    </div>
                    <div className="modules-wrapper">
                        <div className="modules-icon">
                            <FaConnectdevelop />
                        </div>
                        <div className="modules-info">
                            <h1>Introdução e Preparatório</h1>
                            <p>3/3 aulas</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
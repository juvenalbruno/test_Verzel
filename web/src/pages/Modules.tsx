import { Link } from 'react-router-dom';
import { FaConnectdevelop } from 'react-icons/fa';

import { ModulesComponents } from '../components/ModulesComponent';
import { ClassComponent } from '../components/ClassComponent';

import LogoIMG from '../assets/img/logo.png';

import '../styles/modules.scss';

export function Modules() {
    return (
        <div id="page-modules">
            <header>
                <div className="content">
                    <img src={LogoIMG} alt="Verzel" />
                    <Link to="/user/login">Entrar</Link>
                </div>
            </header>

            <main>
                <ModulesComponents />
           
                <div className="aulas-title">
                    <div className="aulas-icon">
                        <FaConnectdevelop />
                    </div>
                    <div>
                        <h1>Lógica de Programação</h1>
                        <p>Todas as aulas dísponiveis nesse módulo:</p>
                    </div>
                </div>

                <ClassComponent />
                
            </main>
        
            <footer>
                <div className="info">
                    <img src={LogoIMG} alt="Verzel" />
                    <p>© Copyright 2021 Verzel. Todos os direitos reservados</p>
                </div>
            </footer>
        </div>
    );
}
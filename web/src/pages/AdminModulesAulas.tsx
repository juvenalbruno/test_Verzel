import { Link } from 'react-router-dom';

import LogoIMG from '../assets/img/logo.png';

import '../styles/admin.scss'

export function AdminModulesAulas() {

    const ModulesID = sessionStorage.getItem('modulesId');
    
    return (
        <div id="page-admin">
            <header>
                <div className="content">
                    <img src={LogoIMG} alt="Verzel" />
                    <Link to="/admin">voltar</Link>
                </div>
            </header>

            <main>
                <h1>Aulas do Módulo:</h1>
                <p>{ModulesID}</p>
            </main>
        </div>
    )
}
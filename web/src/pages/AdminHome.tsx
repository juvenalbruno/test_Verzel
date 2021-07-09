import { Link } from 'react-router-dom';
import { CreateModule } from '../components/CreateModule';
import { ListModules } from '../components/ListModules';
import { CreateClass } from '../components/CreateClassComponent';

import LogoIMG from '../assets/img/logo.png';

import '../styles/admin.scss'

export function AdminHome() {
    return (
        <div id="page-admin">
            <header>
                <div className="content">
                    <img src={LogoIMG} alt="Verzel" />
                    <Link to="/">Sair</Link>
                </div>
            </header>

            <main>
                <h1>Cadastro de Módulos/Aulas:</h1>

                <div className="create-content">
                    <CreateModule />
                    <hr />
                    <CreateClass />
                </div>

                <h1>Módulos e Aulas:</h1>
                <ListModules />
            </main>
        </div>
    )
}
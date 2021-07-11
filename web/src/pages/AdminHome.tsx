import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { CreateModule } from '../components/CreateModule';
import { ListModules } from '../components/ListModules';
import { CreateClass } from '../components/CreateClassComponent';
import { UpdateModule } from '../components/UpdateModule';

import LogoIMG from '../assets/img/logo.png';

import '../styles/admin.scss'

export function AdminHome() {
    return (
        <div id="page-admin">
            <header>
                <div className="content">
                    <img src={LogoIMG} alt="Verzel" />
                    <Link to="/user/login"><FiLogOut />Sair</Link>
                </div>
            </header>

            <main>
                <h1>Cadastro de Módulos/Aulas:</h1>

                <div className="create-content">
                    <div className="modules">
                        <CreateModule />
                        <UpdateModule />
                    </div>
                    <hr />
                    <CreateClass />
                </div>

                <h1>Módulos:</h1>
                <p>Selecione o módulo para ver as aulas</p>
                <ListModules />
            </main>
        </div>
    )
}
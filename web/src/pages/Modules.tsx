import { Button } from '../components/Button';

import LogoIMG from '../assets/img/logo.png';

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
            </main>
        </div>
    );
}
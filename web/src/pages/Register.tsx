import { RegisterComponent } from '../components/RegisterComponent';

import LogoIMG from '../assets/img/logo.png';

import '../styles/home.scss';

export function Register() {
    return (
        <div id="page-auth">
            <aside>
                <img src={LogoIMG} alt="Verzel" />
                <strong>Cadastre seus Módulos de aulas</strong>
            </aside>
            <main>
                <RegisterComponent />
            </main>
        </div>
    )
}
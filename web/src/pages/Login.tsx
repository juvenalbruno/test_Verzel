import { LoginComponent } from '../components/LoginComponent';

import LogoIMG from '../assets/img/logo.png';

import '../styles/home.scss';

export function Login() {
    return (
        <div id="page-auth">
            <aside>
                <img src={LogoIMG} alt="Verzel" />
                <strong>Cadastre seus Módulos de aulas</strong>
            </aside>
            <main>
                <LoginComponent />
            </main>
        </div>
    )
}
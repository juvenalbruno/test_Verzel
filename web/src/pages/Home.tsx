import { HomeComponent } from '../components/HomeComponent';

import LogoIMG from '../assets/img/logo.png';

import '../styles/home.scss';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={LogoIMG} alt="Verzel" />
                <strong>Cadastre seus Módulos de aulas</strong>
            </aside>
            <main>
                <HomeComponent />
            </main>
        </div>
    )
}
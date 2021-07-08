import { Link } from 'react-router-dom';

export function ClassComponent() {
    return (
        <div id="page-modules">
            <main>
            <div className="aulas-content">
                    <div className="aulas-wrapper">
                        <div className="aulas-info">
                            <img src="https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png" alt="" />

                            <h1>Introdução a ReactJS</h1>

                            <p>Vamos criar uma aplicação web utilizando o React juntamento com o TypeScript e o nodeJS.</p>
                        </div>

                        <Link to="#">Assistir aula</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
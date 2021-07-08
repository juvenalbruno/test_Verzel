import { FaConnectdevelop } from 'react-icons/fa';

export function ModulesComponents() {
    return (
        <div id="page-modules">
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
                            <p>3 aulas</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
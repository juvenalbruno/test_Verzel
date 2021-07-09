import { useEffect,useState } from 'react';
import { api } from '../services/api';

export function ListModules() {

    const [modulesAula, setModulesAula] = useState();

    useEffect(() => {
        api.get("modules").then(res => setModulesAula(res.data));
    }, [])

    console.log(modulesAula)


    return (
            <main>
                <div className="main-content">
                    <h2>Módulos:</h2>
                    
                </div>
            </main>
    )
}
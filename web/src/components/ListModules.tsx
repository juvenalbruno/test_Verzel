import { useEffect,useState } from 'react';
import { api } from '../services/api';

import { FaTrash, } from 'react-icons/fa'

// import '../styles/admin.scss'

interface ModulesType {
    id: string;
    modules_name: string;
}

interface AulasType {
    id: string;
    aula_name: string;
    info: string;
    link_video: string;
    Link_img: string;
    happen: string;
}

export function ListModules() {

    const [modulesAula, setModulesAula] = useState<ModulesType[]>([]);
    const [Aulas, setAulas] = useState<AulasType[]>([]);
    const [Atr, setAtr] = useState('');
    
    useEffect(() => {
        api.get("/modules").then(res => setModulesAula(res.data));
        
    }, [])
    
    async function handleDelete() {
        console.log('foi')
        console.log(Atr)
    }

    return (
        <div className="module-content">
            {modulesAula.map(modules => {
                return( 
                    <>
                        <div className="module-wrapper">
                            <h2>{ modules.modules_name }</h2>
                            <hr />
                            <p>ID: {modules.id}</p>
                            
                            <FaTrash
                                onClick={handleDelete}
                            />
                        </div>
                    </>
                )
                })}
        </div>
    )
}
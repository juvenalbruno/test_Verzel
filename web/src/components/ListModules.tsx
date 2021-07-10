import { useEffect,useState } from 'react';
import { api } from '../services/api';

import { FaTrash, } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

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

    const token = sessionStorage.getItem('Token');
    const history = useHistory();
    const [modulesAula, setModulesAula] = useState<ModulesType[]>([]);
    const [Aulas, setAulas] = useState<AulasType[]>([]);
    
    useEffect(() => {
        api.get("/modules").then(res => setModulesAula(res.data));
    }, [])
    
    async function handleDelete(id: string) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        api.delete(`/modules/${id}`, config);
        alert("Módulo deletado!");
        history.go(0)
    }

    async function handleOpenModule(modulesId: string){
        sessionStorage.setItem('modulesId', modulesId);
        history.push('/admin/module/aulas');
    }

    return (
        <div className="module-content">
            {modulesAula.map(modules => {
                return( 
                    <>
                        <div className="module-wrapper">
                            <button onClick={() => handleOpenModule(modules.id)}><h2>{ modules.modules_name }</h2></button>
                            <hr />
                            <p>ID: {modules.id}</p>
                            
                            <FaTrash onClick={e => handleDelete(modules.id)}/>
                            
                        </div>
                    </>
                )
                })}
        </div>
    )
}
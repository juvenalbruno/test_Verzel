import { useEffect,useState } from 'react';
import { api } from '../services/api';

import { FaTrash, } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

interface ModulesType {
    id: string;
    modules_name: string;
}

export function ListModules() {

    const token = sessionStorage.getItem('Token');
    const history = useHistory();
    const [modulesAula, setModulesAula] = useState<ModulesType[]>([]);
    
    
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
        history.push('/admin/module');
    }

    return (
        <div className="module-content">
            {modulesAula.map(modules => {
                return( 
                    <div className="module-wrapper" key={modules.id}>
                        <div className="module-info">
                            <button onClick={() => handleOpenModule(modules.id)}><h2>{ modules.modules_name }</h2></button>
                            <p>ID: {modules.id}</p>
                        </div>
                        
                        <FaTrash onClick={e => handleDelete(modules.id)}/>
                        
                    </div>
                )
                })}
        </div>
    )
}
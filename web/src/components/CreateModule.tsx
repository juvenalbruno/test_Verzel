import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';

import '../styles/admin.scss';
import { useHistory } from 'react-router-dom';

export function CreateModule() {

    const token = sessionStorage.getItem('Token');
    const history = useHistory();
    const [nameModule, setNameModule] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!nameModule || nameModule.trim() === "") {
            alert("Erro ao cadastrar nome!")
            return;
        }
        
        const data = { modules_name: nameModule }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await api.post("/modules", data, config);

        alert(`Módulo ${nameModule} criado com sucesso!`)
        history.go(0);
    }
    return (
            <main>
                <div className="main-content">
                    <h2>Novo Módulo</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="Nome do módulo"
                        onChange={e => setNameModule(e.target.value)}
                        value={nameModule}
                        />
                        <Button type="submit">Cadastrar</Button>
                    </form>
                </div>
            </main>
    )
}
import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';

import '../styles/admin.scss';

export function UpdateModule() {

    const token = sessionStorage.getItem('Token');
    const [nameModule, setNameModule] = useState("");
    const [IDModule, setIDModule] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!IDModule || IDModule.trim() === "") {
            alert("Erro ao atualizar ID!")
            return;
        }
        if (!nameModule || nameModule.trim() === "") {
            alert("Erro ao atualizar nome!")
            return;
        }
        
        const data = { modules_name: nameModule }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await api.put(`/modules/${IDModule}`, data, config);

        alert(`Módulo ${nameModule} atualizado com sucesso!`)
        return;
    }
    return (
            <main>
                <div className="main-content">
                    <h2>Atualizando Módulo</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="ID do módulo"
                        onChange={e => setIDModule(e.target.value)}
                        value={IDModule}
                        />
                        <input
                        type="text"
                        placeholder="Nome do módulo"
                        onChange={e => setNameModule(e.target.value)}
                        value={nameModule}
                        />
                        <Button type="submit" style={{background: "#27c500"}}>Atualizar</Button>
                    </form>
                </div>
            </main>
    )
}
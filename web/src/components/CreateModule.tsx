import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';

import '../styles/admin.scss';

export function CreateModule() {

    const token = sessionStorage.getItem('Token');
    const [nameModule, setNameModule] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const data = { modules_name: nameModule }

        await api.post("/modules", data, { headers: { 'x-access-token': `${token}` } });

        alert(`Módulo ${nameModule} criado com sucesso!`)
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
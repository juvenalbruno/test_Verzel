import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';

export function CreateClass() {

    const token = sessionStorage.getItem('Token');
    const [nameClass, setNameClass] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const data = { Classs_name: nameClass }

        await api.post("/modules/aulas", data, { headers: { 'x-access-token': `${token}` } });

        alert(`Módulo ${nameClass} criado com sucesso!`)
    }

    // modules_id, aula_name, info, link_video, Link_img, happen

    
    return (
            <main>
                <div className="main-content">
                    <h2>Nova Aula</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="ID do módulo"
                        onChange={e => setNameClass(e.target.value)}
                        value={nameClass}
                        />
                        <input
                        type="text"
                        placeholder="Nome da aula"
                        onChange={e => setNameClass(e.target.value)}
                        value={nameClass}
                        />
                        <input
                        type="text"
                        placeholder="Informações da aula"
                        onChange={e => setNameClass(e.target.value)}
                        value={nameClass}
                        />
                        <input
                        type="text"
                        placeholder="Link da aula"
                        onChange={e => setNameClass(e.target.value)}
                        value={nameClass}
                        />
                        <input
                        type="text"
                        placeholder="Link da imagem da aula"
                        onChange={e => setNameClass(e.target.value)}
                        value={nameClass}
                        />
                        <input
                        type="date"
                        placeholder="Quado irá acontecer?"
                        onChange={e => setNameClass(e.target.value)}
                        value={nameClass}
                        />
                        <Button type="submit">Cadastrar</Button>
                    </form>
                </div>
            </main>
    )
}
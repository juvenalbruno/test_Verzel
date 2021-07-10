import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';

import '../styles/admin.scss';
import { useHistory } from 'react-router-dom';

export function UpdateClass() {

    const token = sessionStorage.getItem('Token');
    const history = useHistory();
    const [ModuleID, setModuleID] = useState("");
    const [AulaName, setAulaName] = useState("");
    const [Info, setInfo] = useState("");
    const [LinkVideo, setLinkVideo] = useState("");
    const [LinkImg, setLinkImg] = useState("");
    const [Happen, setHappen] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!ModuleID || ModuleID.trim() === "") {
            alert("Erro ao cadastrar ID do módulo!")
        }
        if (!AulaName || AulaName.trim() === "") {
            alert("Erro ao cadastrar Nome da aula!")
        }
        if (!Info || Info.trim() === "") {
            alert("Erro ao cadastrar Informações da aula!")
        }
        if (!LinkVideo || LinkVideo.trim() === "") {
            alert("Erro ao cadastrar Link da aula!")
        }
        if (!LinkImg || LinkImg.trim() === "") {
            alert("Erro ao cadastrar Link da imagem da aula!")
        }
        if (!Happen || Happen.trim() === "") {
            alert("Erro ao cadastrar Quando ocorrerá!")
        }
        
        const data = {
            modules_id: ModuleID,
            aula_name: AulaName,
            info: Info,
            link_video: LinkVideo,
            Link_img: LinkImg,
            happen: Happen
        }

        const config = { headers: { Authorization: `Bearer ${token}` } }; 
        await api.post("/modules/aulas", data, config);

        alert(`Aula ${AulaName} criada com sucesso!`)
        setModuleID("");
        setAulaName("");
        setInfo("");
        setLinkVideo("");
        setLinkImg("");
        setHappen("");
    }

    return (
            <main>
                <div className="main-content">
                <h1>Atualizar Dados da Aula:</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="ID do módulo"
                        onChange={e => setModuleID(e.target.value)}
                        value={ModuleID}
                        />
                        <input
                        type="text"
                        placeholder="Nome da aula"
                        onChange={e => setAulaName(e.target.value)}
                        value={AulaName}
                        />
                        <input
                        type="text"
                        placeholder="Informações da aula"
                        onChange={e => setInfo(e.target.value)}
                        value={Info}
                        />
                        <input
                        type="text"
                        placeholder="Link da aula"
                        onChange={e => setLinkVideo(e.target.value)}
                        value={LinkVideo}
                        />
                        <input
                        type="text"
                        placeholder="Link da imagem da aula"
                        onChange={e => setLinkImg(e.target.value)}
                        value={LinkImg}
                        />
                        <input
                        type="date"
                        placeholder="Quado irá acontecer?"
                        onChange={e => setHappen(e.target.value)}
                        value={Happen}
                        />
                        <Button type="submit">Cadastrar</Button>
                    </form>
                </div>
            </main>
    )
}
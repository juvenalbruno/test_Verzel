import { FormEvent, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import { api } from "../services/api";
import { Button } from "../components/Button";

import LogoIMG from "../assets/img/logo.png";
import "../styles/admin.scss";


export function AdminAula() {
  const [ModuleID, setModuleID] = useState('');
  const [AulaName, setAulaName] = useState('');
  const [Info, setInfo] = useState('');
  const [LinkVideo, setLinkVideo] = useState('');
  const [LinkImg, setLinkImg] = useState('');
  const [Happen, setHappen] = useState('');

  const token = sessionStorage.getItem("Token");
  const aula_id = sessionStorage.getItem("aula_id");

  const history = useHistory();

  async function GetAula() {
    const data = await api.get(`/modules/aula/${aula_id}`);

    setModuleID(data.data[0].id);
    setAulaName(data.data[0].aula_name);
    setInfo(data.data[0].info);
    setLinkVideo(data.data[0].link_video);
    setLinkImg(data.data[0].Link_img);
  }

  useEffect(() => {
    GetAula();
  }, [aula_id]);
  
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      modules_id: ModuleID,
      aula_name: AulaName,
      info: Info,
      link_video: LinkVideo,
      Link_img: LinkImg,
      happen: Happen,
    };

    const config = { headers: { Authorization: `Bearer ${token}` } };

    await api.put(`/modules/aulas/${ModuleID}`, data, config);

    alert(`Aula ${AulaName} atualizada com sucesso!`);
    history.goBack();
  }

  return (
    <div id="page-admin-aulas">
      <header>
        <div className="content">
          <img src={LogoIMG} alt="Verzel" />
          <Link to="/admin">
            <IoArrowBackOutline /> Voltar Módulos
          </Link>
        </div>
      </header>

      <main id="main-Aulas">
        <div className="main-content">
          <h1>Atualizar Dados da Aula:</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ID do módulo"
              onChange={(e) => setModuleID(e.target.value)}
              value={ModuleID}
            />
            <input
              type="text"
              placeholder="Nome da aula"
              onChange={(e) => setAulaName(e.target.value)}
              value={AulaName}
            />
            <input
              type="text"
              placeholder="Informações da aula"
              onChange={(e) => setInfo(e.target.value)}
              value={Info}
            />
            <input
              type="text"
              placeholder="Link da aula"
              onChange={(e) => setLinkVideo(e.target.value)}
              value={LinkVideo}
            />
            <input
              type="text"
              placeholder="Link da imagem da aula"
              onChange={(e) => setLinkImg(e.target.value)}
              value={LinkImg}
            />
            <input
              type="date"
              placeholder="Quado irá acontecer?"
              onChange={(e) => setHappen(e.target.value)}
              value={Happen}
            />
            <Button type="submit">Atualizar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

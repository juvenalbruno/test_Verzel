import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import LogoIMG from "../assets/img/logo.png";
import { api } from "../services/api";

import "../styles/adminAulas.scss";

interface AulasType {
  id: string;
  aula_name: string;
  info: string;
  link_video: string;
  Link_img: string;
  happen: Date;
}

export function AdminModulesAulas() {
  const token = sessionStorage.getItem("Token");
  const ModulesID = sessionStorage.getItem("modulesId");

  const history = useHistory();
  const [aulas, setAulas] = useState<AulasType[]>([]);

  useEffect(() => {
    api.get(`/modules/aulas/${ModulesID}`).then((res) => setAulas(res.data));
  }, [ModulesID]);

  async function handleDelete(id: string) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.delete(`modules/aulas/${id}`, config);
    alert("Aula deletada!");
    history.go(0);
  }

  function handleSelectAula(id: string){
    sessionStorage.setItem('aula_id', id)
    history.push("/admin/module/aula")
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

      <main>
          <h1>Aulas do Módulo:</h1>
          <p>Selecione a aula</p>
          <div className="aulas-content">
            {aulas.map((Aula) => {
              return (
                <div className="aulas-wrapper" key={Aula.id}>
                  <div className="aulas-title">
                    <button onClick={() => handleSelectAula(Aula.id)}>
                      <h2 key={Aula.id}>{Aula.aula_name}</h2>
                    </button>
                    <FaTrash onClick={(e) => handleDelete(Aula.id)} />
                  </div>
                  <p>
                    <strong>ID: </strong>
                    {Aula.id}
                  </p>
                  <p>
                    <strong>Informação: </strong>
                    {Aula.info}
                  </p>
                  <p className="Link">
                    <strong>Link da Aula:</strong>
                    {Aula.link_video}
                  </p>
                  <p className="Link">
                    <strong>Link Imagem aula: </strong>
                    {Aula.Link_img}
                  </p>
                  <p>
                    <strong>Quando acontecerá: </strong>
                    {Aula.happen}
                  </p>
                </div>
              );
            })}
          </div>
      </main>
    </div>
  );
}

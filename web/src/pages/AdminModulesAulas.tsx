import { Link, useHistory } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import LogoIMG from "../assets/img/logo.png";

import "../styles/adminAulas.scss";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { UpdateClass } from "../components/UpdateClass";

interface AulasType {
  id: string;
  aula_name: string;
  info: string;
  link_video: string;
  Link_img: string;
  happen: string;
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
        <UpdateClass />

        <div className="content">
          <h1>Aulas do Módulo:</h1>
          <div className="aulas-content">
            {aulas.map((Aula) => {
              return (
                <div className="aulas-wrapper">
                  <div className="aulas-title">
                    <h2>Aula: {Aula.aula_name}</h2>
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
                  <p>
                    <strong>Link da Aula:</strong>
                    {Aula.link_video}
                  </p>
                  <p>
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
        </div>
      </main>
    </div>
  );
}

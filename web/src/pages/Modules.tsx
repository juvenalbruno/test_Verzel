import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";

import { ModulesComponents } from "../components/ModulesComponent";
import { ClassComponent } from "../components/ClassComponent";
import { api } from "../services/api";

import LogoIMG from "../assets/img/logo.png";

import "../styles/modules.scss";

interface UserDataType {
  id: string;
  modules_name: string;
}

export function Modules() {
  const [userData, setUserData] = useState<UserDataType[]>([]);
  const [Name, setName] = useState("");
  const [ID, setID] = useState("");

  async function handleModules() {
    const response = await api.get("/modules");

    setUserData(response.data);
    setID(response.data[0].id);
    setName(response.data[0].modules_name);
  }

  useEffect(() => {
    handleModules();
  }, []);

  return (
    <div id="page-modules">
      <header>
        <div className="content">
          <img src={LogoIMG} alt="Verzel" />
          <Link to="/user/login">Entrar</Link>
        </div>
      </header>

      <main>
        <div className="modules-title">
          <h1>Módulos</h1>
          <p>Selecione o módulo para ver as aulas disponíveis:</p>
        </div>
        <div className="modules-content">
          {userData.map((userName) => {
            return (
              <div
                onClick={() => {
                  setName(userName.modules_name);
                  setID(userName.id);
                }}
                key={userName.id}
              >
                <ModulesComponents
                  id={userName.id}
                  name={userName.modules_name}
                />
              </div>
            );
          })}
        </div>
        <div className="aulas-title">
          <div className="aulas-icon">
            <FaConnectdevelop />
          </div>
          <div>
            <h1>{Name}</h1>
            <p>Todas as aulas dísponiveis nesse módulo:</p>
          </div>
        </div>

        <ClassComponent id={ID} />
      </main>

      <footer>
        <div className="info">
          <img src={LogoIMG} alt="Verzel" />
          <p>© Copyright 2021 Verzel. Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

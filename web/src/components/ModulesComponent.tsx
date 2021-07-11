import { useState } from "react";
import { useEffect } from "react";
import { FiCodepen } from "react-icons/fi";
import { api } from "../services/api";

type ModulesTypeProps = {
  id: string;
  name: string;
};


export function ModulesComponents({ id, name }: ModulesTypeProps) {

  const [aulasQnt, setAulasQant] = useState([]);

  useEffect(() => {
    api.get(`/modules/aulas/${id}`).then(response => { setAulasQant(response.data) })
  }, [id]);

  return (
        <div className="modules-wrapper">
          <div className="modules-icon">
            <FiCodepen />
          </div>
          <div className="modules-info">
            <h1>{name}</h1>
            <p>{aulasQnt.length} aula(s)</p>
          </div>
        </div>
  );
}

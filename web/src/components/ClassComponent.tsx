import { useEffect, useState } from "react";
import { api } from "../services/api";

type AulaTypeProps = {
  id: string;
};

type AulasType = {
  id: string;
  aula_name: string;
  info: string;
  link_video: string;
  Link_img: string;
  happen: string;
}

export function ClassComponent({ id }: AulaTypeProps) {

  const [Dados, setDados] = useState<AulasType[]>([]);

  const [DadosOrd, setDadosOrd] = useState<AulasType[]>([]);

  useEffect(() => {    
    api.get(`/modules/aulas/${id}`).then(res => setDados(res.data));

  }, [id]);

  useEffect(() => {

    const resOrdem = Dados.sort(function (a: { aula_name: string }, b: { aula_name: string }) {
      if (a.aula_name > b.aula_name)
        return 1;
      else if (b.aula_name > a.aula_name)
        return -1;
      else
        return 0;
    });

    setDadosOrd(resOrdem)

  }, [Dados]);

  return (
    <div className="aulas-content">
      {DadosOrd.map(data => {
        return (
          <div className="aulas-wrapper" key={data.id}>
            <div className="aulas-info">
              <img
                src={data.Link_img}
                alt={data.aula_name}
              />

              <h1>{data.aula_name}</h1>

              <p>
                {data.info}
              </p>
              <p>
                {data.happen}
              </p>
            </div>

            <a href={data.link_video} target="_blank" rel="noopener noreferrer">Assistir aula</a>
          </div>
        )
      })}
    </div>
  );
}

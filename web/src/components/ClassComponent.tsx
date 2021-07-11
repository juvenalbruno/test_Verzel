import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const [Data, setData] = useState<AulasType[]>([]);

  useEffect(() => {
    api.get(`/modules/aulas/${id}`).then((res) => setData(res.data));
  }, [id])

  return (
    <div className="aulas-content">
      {Data.map(data => {
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

import { FormEvent, useState } from "react";
import { useHistory } from "react-router";

import { Button } from "./Button";
import { api } from "../services/api";

import "../styles/home.scss";

function RegisterComponent() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const data = { email, name, password };

        await api.post("/users", data);

        alert('Usuário cadastrado com sucesso!');
        history.push("/admin");
  }

  return (
    <div className="main-content">
        <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

export { RegisterComponent };

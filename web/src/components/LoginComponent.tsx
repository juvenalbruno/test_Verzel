import { FormEvent, useState } from "react";
import { useHistory } from "react-router";

import { Button } from "./Button";

import "../styles/home.scss";
import { api } from "../services/api";

function LoginComponent() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    history.push("/user/register");
  }

  async function handleAuth(e: FormEvent) {
    e.preventDefault();
    const data = { email, password }
    
    const token = await api.post("/login", data);
    
    console.log(token.data)

    if (!token.data) {
      alert("E-mail / Password incorrect");
      return;
    }

    // history.push("/user/admin")
    history.push("/");
    
  }

  return (
    <div className="main-content">
      <h2>Login Adm</h2>
      <form onSubmit={handleAuth}>
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
        <Button type="submit">Login</Button>
      </form>
      <div className="separator">ou faça seu Cadastro</div>
      <Button onClick={handleRegister} className="create-user">
        Cadastre-se
      </Button>
    </div>
  );
}

export { LoginComponent };

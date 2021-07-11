import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { FiLogIn } from 'react-icons/fi';

import { Button } from "./Button";
import { api } from "../services/api";

import "../styles/home.scss";

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

    if (!token.data) {
      alert("E-mail / Password incorrect");
      return;
    }
    sessionStorage.clear()
    sessionStorage.setItem('Token', token.data)
    history.push("/admin");
  }

  function handleHome() {
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
        <Button type="submit"><FiLogIn />Login</Button>
      </form>
      <div className="separator">ou faça seu Cadastro</div>
      <Button onClick={handleRegister} className="create-user">
        Cadastre-se
      </Button>

      <Button style={{background: '#44d600'}} onClick={() => handleHome()}>Menu inicial</Button>
    </div>
  );
}

export { LoginComponent };

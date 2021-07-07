import { useState } from "react";
import { useHistory } from "react-router";

import { Button } from "./Button";

import "../styles/home.scss";

function LoginComponent() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleRegister() {
    history.push("/user/register");
  }

  return (
    <div className="main-content">
      <h2>Login Adm</h2>
      <form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
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

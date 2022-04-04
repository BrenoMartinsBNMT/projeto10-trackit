import * as components from "./Components/LoginContent";
import logo from "../../components/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import UserContext from "../../components/ContextApi";
import axios from "axios";

export default function SingIn() {
  let [emaiLogin, setEmailLogin] = useState("");
  let [senhaLogin, setSenhaLogin] = useState("");
  let [disable, setDisable] = useState(false);
  let navigate = useNavigate();

  function loginTrackIt(e) {
    e.preventDefault();
    setDisable(true);
    let promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { email: emaiLogin, password: senhaLogin }
    );

    promisse.then((element) => {
      localStorage.setItem("token", `${element.data.token}`);
      localStorage.setItem("perfilPhoto", `${element.data.image}`);
      navigate("/habitos", { replace: true });
    });

    promisse.catch(() => {
      alert("Preencha os campos novamente ou recarregue a página");
    });
  }

  return (
    <components.LoginContent>
      <components.LogoLogin src={logo} />
      <components.LoginForm>
        <form onSubmit={loginTrackIt}>
          <input
            type="text"
            placeholder="email"
            onChange={(element) => setEmailLogin(element.target.value)}
            disabled={disable}
          />
          <input
            type="password"
            placeholder="senha"
            onChange={(element) => setSenhaLogin(element.target.value)}
            disabled={disable}
          />

          <button disabled={disable} type="submit">
            Entrar
          </button>
        </form>
      </components.LoginForm>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </components.LoginContent>
  );
}

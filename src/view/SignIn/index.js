import * as components from "./Components/LoginContent";
import logo from "../../components/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import UserContext from "../../components/ContextApi";
import axios from "axios";

export default function SingIn() {
  const { setToken, setPerfilPhoto } = useContext(UserContext);
  let [emaiLogin, setEmailLogin] = useState("");
  let [senhaLogin, setSenhaLogin] = useState("");
  let [disable, setDisable] = useState(false);
  let navigate = useNavigate();

  function loginTrackIt() {
    let promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { email: emaiLogin, password: senhaLogin }
    );

    promisse.then((element) => {
      setDisable(true);
      setToken(element.data.token);
      setPerfilPhoto(element.data.image)
      navigate("/habitos", { replace: true });
    });

    promisse.catch((element) => {
      setDisable(false);
    });
  }

  return (
    <components.LoginContent>
      <components.LogoLogin src={logo} />
      <components.LoginForm>
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

        <button onClick={loginTrackIt} disabled={disable}>
          Entrar
        </button>
      </components.LoginForm>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </components.LoginContent>
  );
}

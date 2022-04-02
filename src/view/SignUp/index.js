import * as components from "./components/ComponentsSignUp";
import logo from "../../components/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  let [email, setEmail] = useState("");
  let [senha, setSenha] = useState("");
  let [nome, setNome] = useState("");
  let [foto, setFoto] = useState("");

  function signUpTrackIt() {
    let promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      { email: email, name: nome, image: foto, password: senha }
    );

    promisse.then((element) => {
      console.log(element);
    });
  }
  return (
    <components.MainContentSignUp>
      <components.LogoSignUp>
        <img src={logo} alt="" />
      </components.LogoSignUp>
      <components.FormSignUp>
        <form action={signUpTrackIt}>
          <input
            type="email"
            placeholder="email"
            onChange={(element) => setEmail(element.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            onChange={(element) => setSenha(element.target.value)}
          />
          <input
            type="text"
            placeholder="nome"
            onChange={(element) => setNome(element.target.value)}
          />
          <input
            type="text"
            placeholder="foto"
            onChange={(element) => setFoto(element.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </components.FormSignUp>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </components.MainContentSignUp>
  );
}

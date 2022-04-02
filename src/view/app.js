import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../components/ContextApi";
import styled from "styled-components";
import { useState } from "react";

import SingIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import Habbits from "./Habbits/index";

const MainContent = styled.div`
  background: #e5e5e5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  let [token, setToken] = useState("");
  let [perfilPhoto, setPerfilPhoto] = useState();

  let photo = perfilPhoto;

  return (
    <UserContext.Provider value={{ token, setToken, photo, setPerfilPhoto }}>
      <BrowserRouter>
        <MainContent>
          <Routes>
            <Route path="/" element={<SingIn />}></Route>
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habbits />} />
          </Routes>
        </MainContent>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

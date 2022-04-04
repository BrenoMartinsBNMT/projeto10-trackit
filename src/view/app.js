import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../components/ContextApi";
import styled from "styled-components";
import { useState } from "react";

import SingIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import Habbits from "./Habbits/index";
import TodayHabiits from "./Today";

const MainContent = styled.div`
  background: #e5e5e5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <MainContent>
          <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habbits />} />
            <Route path="/hoje" element={<TodayHabiits />} />
          </Routes>
        </MainContent>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

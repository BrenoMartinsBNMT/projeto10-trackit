import { useState, useContext } from "react";
import * as components from "./components/HabbitsContent";
import { TailSpin } from "react-loader-spinner";

import UserContext from "../../components/ContextApi";
import axios from "axios";
export default function Habbits() {
  const { token, photo } = useContext(UserContext);

  console.log(photo);

  let promisse = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  promisse.then((element) => console.log(element));
  let [perfilPhoto, setPerfilPhoto] = useState();
  return (
    <>
      {token === "" ? (
        <components.Loading>
          <TailSpin color="#126BA5" />
        </components.Loading>
      ) : (
        <components.HabbitsMainContent>
          <components.NavHabbits>
            <p>TrackIt</p> <img src={photo} alt="" />
          </components.NavHabbits>
          <components.AddNewHabbit>
            <p>Meus Hábitos</p>
            <button>
              <span class="material-icons">add</span>
            </button>
          </components.AddNewHabbit>

          <components.MenuHabbits>
            <components.InputNewHabbits>
              <input type="text" placeholder="nome do hábito" />
              <div className="day-week">
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
              </div>

              <div className="buttons-actions">
                <button id="cancelar">Cancelar</button>
                <button id="salvar">Salvar</button>
              </div>
            </components.InputNewHabbits>
          </components.MenuHabbits>
          <p id="text-if-no-habbits">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </components.HabbitsMainContent>
      )}
    </>
  );
}

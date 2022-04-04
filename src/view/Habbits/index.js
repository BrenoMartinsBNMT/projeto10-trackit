import { useEffect, useState } from "react";
import * as components from "./components/HabbitsContent";
import { TailSpin } from "react-loader-spinner";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import trash from "../../components/trash.svg";
import { Link } from "react-router-dom";
//

//
export default function Habbits() {
  //

  //
  let token = localStorage.getItem("token");
  let photo = localStorage.getItem("perfilPhoto");
  let [myHabbits, setMyHabbits] = useState("");
  let [addNewHabbits, setAddNewHabbits] = useState(false);
  let [disableText, setDisableText] = useState(false);
  let [habbitsDay, setHabbitsDay] = useState([]);
  let [habbitName, setHabbitName] = useState("");
  let [hasHabbits, setHasHabbits] = useState("");
  let days = ["D", "S", "T", "Q", "Q", "S", "S"];
  let count = 0;
  //

  //
  useEffect(() => {
    let promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promisse.then((element) => {
      setMyHabbits(element.data);
      setHasHabbits(element.data);
    });
  }, []);

  function deletePost(id) {
    let valueConfirm = window.confirm("deseja mesmo apagar este hábito?");
    if (valueConfirm === true) {
      let promisse = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      promisse.then(() => {
        let promisse = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        promisse.then((element) => {
          setHasHabbits(element.data);
        });
      });
    } else {
      return;
    }
  }

  function dayOfHabbit(e) {
    let valueNumber = Number.parseInt(e.target.value, 10);
    setHabbitsDay([...habbitsDay, valueNumber]);

    if (e.target.className.includes("button-selecionado")) {
      e.target.className = "";
    } else {
      e.target.className = "button-selecionado";
    }
  }
  function saveHabbit() {
    let promisse = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        name: habbitName,
        days: habbitsDay,
      },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    promisse.then(() => {
      setDisableText(true);
      let promisse = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      promisse.then((element) => {
        setHasHabbits(element.data);
        setAddNewHabbits(false);
      });
    });
  }

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
            <button onClick={() => setAddNewHabbits(true)}>
              <span class="material-icons">add</span>
            </button>
          </components.AddNewHabbit>

          <components.MenuHabbits>
            {addNewHabbits === true ? (
              <components.InputNewHabbits>
                <input
                  type="text"
                  placeholder="nome do hábito"
                  onChange={(element) => setHabbitName(element.target.value)}
                  value={habbitName}
                  disabled={disableText}
                />
                <div className="day-week">
                  <button
                    value="1"
                    onClick={dayOfHabbit}
                    disabled={disableText}
                  >
                    D
                  </button>
                  <button
                    value="2"
                    onClick={dayOfHabbit}
                    disabled={disableText}
                  >
                    S
                  </button>
                  <button
                    value="3"
                    onClick={dayOfHabbit}
                    disabled={disableText}
                  >
                    T
                  </button>
                  <button
                    value="4"
                    onClick={dayOfHabbit}
                    disabled={disableText}
                  >
                    Q
                  </button>
                  <button
                    value="5"
                    onClick={dayOfHabbit}
                    disabled={disableText}
                  >
                    Q
                  </button>
                  <button
                    value="6"
                    onClick={dayOfHabbit}
                    disabled={disableText}
                  >
                    S
                  </button>
                  <button
                    value="7"
                    onClick={dayOfHabbit}
                    disabled={disableText}
                  >
                    S
                  </button>
                </div>

                <div className="buttons-actions">
                  <button id="cancelar" onClick={() => setAddNewHabbits(false)}>
                    Cancelar
                  </button>
                  <button id="salvar" onClick={saveHabbit}>
                    Salvar
                  </button>
                </div>
              </components.InputNewHabbits>
            ) : (
              <></>
            )}
          </components.MenuHabbits>
          {hasHabbits === "" ? (
            <p id="text-if-no-habbits">
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          ) : (
            hasHabbits.map((habbitsMap) => {
              return (
                <div className="habbits-to-track">
                  <span>{habbitsMap.name}</span>
                  <img
                    src={trash}
                    alt=""
                    className="habbits-to-track-img"
                    id={habbitsMap.id}
                    onClick={(element) => deletePost(element.target.id)}
                  />
                  <div className="buttons-habbits-totrack">
                    {habbitsMap.days.map((daysElement) => {
                      return days.map((element, index) => {
                        if (index + 1 === daysElement) {
                          return (
                            <button className="button-selecionado">
                              {element}
                            </button>
                          );
                        } else {
                          return <button>{element}</button>;
                        }
                      });
                    })}
                  </div>
                </div>
              );
            })
          )}

          <components.FooterMenuHabbits>
            <Link to="/habitos">
              <button>Hábitos</button>
            </Link>
            <Link to="/hoje">
              <div className="sizeProgressBar">
                <CircularProgressbar
                  value={0}
                  text={"Hoje"}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  })}
                />
              </div>
            </Link>
            <Link to="/historico">
              <button>Histórico</button>
            </Link>
          </components.FooterMenuHabbits>
        </components.HabbitsMainContent>
      )}
    </>
  );
}

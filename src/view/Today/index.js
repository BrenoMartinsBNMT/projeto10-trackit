import * as components from "./components/componetsToday";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import ok from "../../components/ok.svg";

import UserContext from "../../components/ContextApi";
import { useContext } from "react";

//

//
export default function TodayHabiits() {
  let token = localStorage.getItem("token");
  let photo = localStorage.getItem("perfilPhoto");
  let [habbitsToday, setHabbitsToday] = useState("");

  let { progressHabbit } = useContext(UserContext);
  //
  function setDoHabbit(e) {
    console.log(e.target.id);
    let id = e.target.id;
    let promisse = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promisse.then((element) => {
      let promisse = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      promisse.then((element) => {
        setHabbitsToday(element.data);
      });
    });
  }
  //
  useEffect(() => {
    let promisse = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    promisse.then((element) => {
      setHabbitsToday(element.data);
    });
  }, []);

  const daysWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  //
  return (
    <components.MainContentToday>
      <components.NavToday>
        <p>TrackIt</p> <img src={photo} alt="" />
      </components.NavToday>
      <components.ReportToday>
        <components.TextDate>
          {`${
            daysWeek[dayjs().day()]
          }, 0${dayjs().date()}/0${dayjs().month()} `}
          {<p className="do-not-habbits">Nenhum hábito concluído ainda</p>}
        </components.TextDate>
      </components.ReportToday>
      <components.DivHabbitsReport>
        {habbitsToday === "" ? (
          <></>
        ) : (
          habbitsToday.map((element) => {
            return (
              <components.ReportIfDoHabbits>
                <div>
                  <components.TitleReport>
                    {element.name}
                  </components.TitleReport>
                  <components.CurrentSequence>
                    Sequência atual: {element.currentSequence} dias
                  </components.CurrentSequence>
                  <components.HighestSequence>
                    Seu recorde: {element.highestSequence} dias
                  </components.HighestSequence>
                </div>
                <button onClick={setDoHabbit} className={`${element.done}`}>
                  <img src={ok} alt="" id={element.id} />
                </button>
              </components.ReportIfDoHabbits>
            );
          })
        )}
      </components.DivHabbitsReport>

      <components.FooterMenuToday>
        <Link to="/habitos">
          <button>Hábitos</button>
        </Link>
        <Link to="/hoje">
          <div className="sizeProgressBar">
            <CircularProgressbar
              value={progressHabbit}
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
      </components.FooterMenuToday>
    </components.MainContentToday>
  );
}

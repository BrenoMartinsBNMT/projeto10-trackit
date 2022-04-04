import * as components from "./components/componetsToday";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs, { Dayjs, isDayjs } from "dayjs";
//

//
export default function TodayHabiits() {
  //
  let token = localStorage.getItem("token");
  let photo = localStorage.getItem("perfilPhoto");
  //
  return (
    <components.MainContentToday>
      <components.NavToday>
        <p>TrackIt</p> <img src={photo} alt="" />
      </components.NavToday>
      <div>{}</div>
      <components.FooterMenuToday>
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
      </components.FooterMenuToday>
    </components.MainContentToday>
  );
}

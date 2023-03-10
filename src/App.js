/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MinutesToHours from "./component/MinutesToHours";
import KmToMiles from "./component/KmToMiles";
import Rsp from "./component/Rsp";
import KgToLb from "./component/KgToLb";
import CelsiusToFahrenheit from "./component/CelsiusToFahrenheit";
import Speed from "./component/Speed";
import Energy from "./component/Energy";
import React from "react";

function App() {
  const [index, setIndex] = useState(-1);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  const [isListHover, setIsListHover] = useState(false);
  return (
    <div className="App">
      <div className="wrapper">
        <h1 style={{ color: "skyblue" }}>My Converter</h1>
        <select value={index} onChange={onSelect}>
          <option value="-1"> Select your units</option>
          <option value="0">Minutes & Hours</option>
          <option value="1">Km & miles</option>
          <option value="2">Kg & Lb</option>
          <option value="3">Celsius & Fahrenheit</option>
          <option value="4">MeterSecond & HourKilometer</option>
          <option value="5">Joule & kiloCalorie</option>
          <option value="6">Rock Paper Scissors</option>
        </select>
        <div style={{ fontSize: "25px", fontWeight: "700" }}>
          {index == "-1" ? (
            <div>
              Please select your unit{" "}
              <img
                onMouseOver={() => setIsListHover(true)}
                onMouseOut={() => setIsListHover(false)}
                src={isListHover ? "pepe2.avif" : "pepe1.png"}
                style={{ width: "100%" }}
              />
            </div>
          ) : null}
          {index === "0" ? <MinutesToHours /> : null}
          {index === "1" ? <KmToMiles /> : null}
          {index === "2" ? <KgToLb /> : null}
          {index === "3" ? <CelsiusToFahrenheit /> : null}
          {index === "4" ? <Speed /> : null}
          {index === "5" ? <Energy /> : null}
          {index === "6" ? <Rsp /> : null}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;

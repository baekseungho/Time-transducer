/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MinutesToHours from "./component/MinutesToHours";
import KmToMiles from "./component/KmToMiles";
import Rsp from "./component/Rsp";

import React from "react";

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <h1 style={{ color: "skyblue" }}>My Converter</h1>
        <select value={index} onChange={onSelect}>
          <option value="xx"> Select your units</option>
          <option value="0">Minutes & Hours</option>
          <option value="1">Km & miles</option>
          <option value="2">Rock Paper Scissors</option>
        </select>
        <div style={{ fontSize: "25px", fontWeight: "700" }}>
          {index === "xx" ? "Please select your unit" : null}
          {index === "0" ? <MinutesToHours /> : null}
          {index === "1" ? <KmToMiles /> : null}
          {index === "2" ? <Rsp /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;

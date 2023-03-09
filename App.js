/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MinutesToHours from "./component/MinutesToHours";
import KmToMiles from "./component/KmToMiles";
import React from "react";

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Super Converter</h1>
        <select value={index} onChange={onSelect}>
          <option value="xx"> Select your units</option>
          <option value="0">Minutes & Hours</option>
          <option value="1">Km & miles</option>
        </select>
        {index === "xx" ? "Please select your unit" : null}
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <KmToMiles /> : null}
      </div>
    </div>
  );
}

export default App;

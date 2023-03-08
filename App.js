/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MinutesToHours from "./component/MinutesToHours";
import KmToMiles from "./component/KmToMiles";

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & miles</option>
      </select>
      {index === "0" ? <MinutesToHours /> : <KmToMiles />}
    </div>
  );
}

export default App;

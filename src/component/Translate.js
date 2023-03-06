import { useState } from "react";
import React from "react";

function Translate() {
  const [minutes, setMinutes] = React.useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  const reset = () => setMinutes(0);
  return (
    <div>
      <div>
        <h1>Super Concerter</h1>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          placehoder="Minutes"
          type="number"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Math.round(minutes / 60)}
          id="hours"
          placehoder="Hours"
          type="number"
        />
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Translate;

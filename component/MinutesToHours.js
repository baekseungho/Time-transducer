import { useState } from "react";
import React from "react";

function KmToMiles() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => setAmount(0);
  const onInverted = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          id="minutes"
          placehoder="Minutes"
          type="number"
          onChange={onChange}
          disabled={inverted}
        />
      </div>

      <div>
        <h4>You wnat to convert {amount}</h4>
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          id="hours"
          placehoder="Hours"
          type="number"
          disabled={!inverted}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInverted}>
        {inverted ? "Turn back" : "Inverted"}
      </button>
    </div>
  );
}

export default KmToMiles;

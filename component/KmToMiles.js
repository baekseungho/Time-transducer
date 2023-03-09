import { useState } from "react";
import React from "react";

const styles = {
  button: {
    height: "50px",
    width: "48%",
    margin: "0 3px",
  },
  mainDiv: {
    height: "350px",
  },
  img: {
    width: "100px",
    height: "110px",
  },
  div: {
    textAlign: "center",
  },
  input: {
    width: "200px",
    height: "40px",
    fontSize: "20px",
    float: "right",
  },
};

function KmToMiles() {
  const [amount, setAmount] = React.useState(0.0);
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
      <h3>KM To M</h3>
      <div style={styles.mainDiv}>
        <div>
          <label htmlFor="minutes">Kilometer</label>
          <input
            style={styles.input}
            value={inverted ? (amount * 1.609).toFixed(2) : amount}
            id="minutes"
            placehoder="Minutes"
            type="number"
            onChange={onChange}
            disabled={inverted}
          />
        </div>
        <div style={styles.div}>
          <img style={styles.img} src="pngwing.com.png" alt="trans" />
        </div>
        <div>
          <label htmlFor="hours">Miles</label>
          <input
            style={styles.input}
            value={inverted ? amount : (amount / 1.609).toFixed(2)}
            id="hours"
            placehoder="Hours"
            type="number"
            disabled={!inverted}
            onChange={onChange}
          />
        </div>
      </div>
      <button style={styles.button} onClick={reset}>
        Reset
      </button>
      <button style={styles.button} onClick={onInverted}>
        {inverted ? "Turn back" : "Inverted"}
      </button>
    </div>
  );
}

export default KmToMiles;

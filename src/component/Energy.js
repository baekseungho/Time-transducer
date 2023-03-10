import { useState } from "react";
import React from "react";

const styles = {
  button: {
    height: "50px",
    width: "48%",
    margin: "0 3px",
    cursor: "pointer",
  },
  mainDiv: {
    height: "350px",
  },
  img: {
    width: "100px",
    height: "110px",
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  input: {
    width: "200px",
    height: "40px",
    fontSize: "20px",
  },
  label: {
    fontWeight: "700",
  },
};

function Energy() {
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
      <div style={styles.mainDiv}>
        <div style={styles.div}>
          <label style={styles.label} htmlFor="minutes">
            J
          </label>
          <input
            style={styles.input}
            value={inverted ? (amount / 4184).toFixed(5) : amount}
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
        <div style={styles.div}>
          <label style={styles.label} htmlFor="hours">
            Kcal
          </label>
          <input
            style={styles.input}
            value={inverted ? amount : (amount * 4184).toFixed(2)}
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

export default Energy;

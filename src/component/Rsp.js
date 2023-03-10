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

function Rsp() {
  let myselect = prompt("무엇을 내시겠습니까? 1(✌), 2(✊), 3(🖐)");
  let landnum = rand(1, 4);

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function myselect1() {
    return landnum === 1
      ? "End in a tie"
      : landnum === 2
      ? "You Lose"
      : "You Win";
  }
  function myselect2() {
    return landnum === 1
      ? "You Win"
      : landnum === 2
      ? "End in a tie"
      : "You Lose";
  }
  function myselect3() {
    return landnum === 1
      ? "You Lose"
      : landnum === 2
      ? "You Win"
      : "End in a tie";
  }

  return (
    <div>
      <p>✌(1), ✊(2), 🖐(3)</p>
      <br />
      <p>
        Your Choice {myselect === "1" ? "✌" : myselect === "2" ? "✊" : "🖐"}
      </p>
      {landnum == 1
        ? "Computers selected ✌"
        : landnum == 2
        ? "Computer selected ✊"
        : "Computer selected 🖐"}
      <br />
      <br />

      {myselect === "1"
        ? myselect1()
        : myselect === "2"
        ? myselect2()
        : myselect3()}
    </div>
  );
}
export default Rsp;

import React from "react";
import "./App.css";
import Hello from "./Hello.js";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "red",
    color: "aqua",
    fontSize: "24",
    padding: "1rem",
  };
  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink" />
        <Counter />
        <br />
        <InputSample />
      </Wrapper>
    </>
  );
}

export default App;

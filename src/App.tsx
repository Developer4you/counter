import React from "react";
import Counter from "./Counter";
import "./App.css";
import { minCounterValue, maxCounterValue } from "./store/counter-reducer";

function App() {
  return (
    <div className="App">
      <Counter min={minCounterValue} max={maxCounterValue} />
    </div>
  );
}

export default App;

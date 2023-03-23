import React from "react";
import ReactDOM from "react-dom";
import Annotataor from "./annotator";

const options = [
  { key: 1, text: "IPsoft", value: "IPsoft" },
  { key: 2, text: "Google", value: "Google" },
  { key: 3, text: "Mozilla", value: "Mozilla" },
  { key: 4, text: "Safari", value: "Safari" }
];

function App() {
  return (
    <div className="App">
      <Annotataor options={options} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import FixedArray from "./components/arrays/FixedArray";

function App() {
  const [sortSteps, setSortSteps] = useState([]);

  function getSteps() {
    axios({
      method: "GET",
      url: "/bubblesort",
    }).then((response) => {
      const res = response.data.steps;
      //   console.log(res);
      setSortSteps([...res]);
    });
  }

  return (
    <div className="App">
      <button onClick={getSteps}>Show me bubblesort!</button>
      <FixedArray props={sortSteps} />
    </div>
  );
}

export default App;

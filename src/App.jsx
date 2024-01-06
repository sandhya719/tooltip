import React from "react";
import "./App.css";
import Tooltip from "./Tooltip";

function App() {
  const positions = {
    left: "left",
    right:  "right",
    top: "top", 
    bottom: "bottom"
  }

  return (
    <div className="App">
        <Tooltip positions={positions}>
          <button className="pressButton">Press</button>
        </Tooltip>
    </div>
  );
}

export default App;

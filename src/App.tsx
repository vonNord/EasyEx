import React from "react";
import "./App.css";
import LeftComp from "./raining/LeftComp";
import RightComp from "./raining/RightComp";

const App: React.FC = () => {
  return (
    <div className="App">
      <LeftComp /> <RightComp />
    </div>
  );
};

export default App;

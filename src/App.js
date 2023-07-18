import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggle !</Button>
      <Button onClick={toggleParagraph}>Toggle paragraph !</Button>
    </div>
  );
}

export default App;


function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Miho', age: 22, 'Frontend'};
const person2 = {name: 'Elena', age: 32, 'SMM'};

const bind = function(pers, log) {
  return log() 
}

bind(person1, logPerson) 
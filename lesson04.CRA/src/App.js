import Button from "./Button";
import styled from "./App.module.css";
import {useState} from "react";

function App() {
  const[counter, setValue] = useState(0);
  const onClick = ()=>setValue((prev) => prev + 1);
  return (
    <div className="App">
      <h1 className={styled.title}>{counter}</h1>
      <button onClick = {onClick} text="Button" />
    </div>
  );
}

export default App;

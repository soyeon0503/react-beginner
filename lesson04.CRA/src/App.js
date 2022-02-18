import Button from "./Button";
import styled from "./App.module.css";
import {useState} from "react";
import { useEffect } from "react";

function Hello(){
  // function effectFn(){
  //   console.log("create");
  //   return destroyedFn;
  // }
  // function destroyedFn(){
  //   console.log("bye");
  // }
  // useEffect(effectFn,[]);
  useEffect(()=>{
    console.log("hi");
    return ()=>console.log("bye");
  },[]);
   //when component destroyed, return this function
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () =>setShowing((prev) => !prev);
  return(
    <div>
      {showing? <Hello/> : null}
      {/*JSX에서 JS쑬 때 중괄호 열고함~ 기억해~ */}
      <button onClick={onClick}>{showing ? "hide" : "showing"}</button> 
    </div>
  );
}

export default App;

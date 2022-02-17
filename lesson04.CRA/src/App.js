import Button from "./Button";
import styled from "./App.module.css";
import {useState} from "react";
import { useEffect } from "react";

function App() {
  const[counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = ()=>setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // 코드의 특정한 부분이 변했을 때, 원하는 코드들을 실행할 수 있는 방법
  useEffect(() =>{
    console.log(" change counter");
  },[counter]); //when counter changes, function
  useEffect(()=>{
    if(keyword!==""&&keyword.length>5){
      console.log("seacrh for",keyword);
    }
  },[keyword]); //keyword가 바뀔때마다 keyword consoole 출력
  return (
    <div className="App">
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."/>
      <h1 className={styled.title}>{counter}</h1>
      <button onClick = {onClick} text="Button" />
    </div>
  );
}

export default App;

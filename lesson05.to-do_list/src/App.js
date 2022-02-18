import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState(""); //todoList contents
  const [toDos, setToDos] = useState([]); //todoList container
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); //currentArray애 새로 추가된 toDo를 추가
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To-Do List {toDos.length}</h1>
      <form>
        <input 
          onChange = {onChange} 
          value = {toDo} 
          type = "text" 
          placeholder="write your to do..."
        />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) =>
          <li key={index}>{toDo}</li>
        )}
      </ul>
    </div>
  );
}

export default App;

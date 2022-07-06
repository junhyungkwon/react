import React, {useState} from 'react';
import './App.css';
import TodoBorad from './components/TodoBorad';


function App() {
  const [inputvalue, setinputvalue] = useState('')
  const [todolist, settodolist] = useState([])
  const additem = () =>{
    console.log("jun,", inputvalue)
    settodolist([...todolist, inputvalue ])
  }
  return (
   <main>
    <input value={inputvalue} type= 'text'  onChange={(event)=>setinputvalue(event.target.value)}/>
    <button onClick={additem}>추가</button>

    <TodoBorad todolist={todolist}/>
   </main>
  );
}

export default App;

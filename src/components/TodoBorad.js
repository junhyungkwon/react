import React from 'react';
import Todoitem from "./Todoitem"

function TodoBorad(props){

    
    return(
        <div>
            <h1> Todo List</h1>
            
            {props.todolist.map((item)=>< Todoitem item={item}/>)}
            

        </div>
    )
}
export default TodoBorad
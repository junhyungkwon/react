import React from 'react';
import Todoitem from "./Todoitem"

function TodoBorad(props){

    console.log("todoborad", props.todoList)
    return(
        <div>
            <h1> Todo List</h1>
            
            {props.todoList.map((item)=><Todoitem item={item}/>)}
            

        </div>
    )
}
export default TodoBorad
import React from "react";
import { TodoItem } from "../todo-item/todo-item";



const TodoList = ({onDeleteTodo, onChangeCompletedStatus, data, onCompletedTasks}) => {

    const dataTodo = data.map((todo) => <TodoItem todo = {todo} 
        onDeleteTodo = {onDeleteTodo} 
        onChangeCompletedStatus = {onChangeCompletedStatus}
        onCompletedTasks = {onCompletedTasks}
        data = {data}/>)

    return(
        <div className="todo-list">
            {dataTodo}
        </div>
    )
}


export { TodoList }
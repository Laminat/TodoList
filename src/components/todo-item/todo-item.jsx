import React from "react";
import './todo-item.css'


const TodoItem = ({todo, onDeleteTodo, onChangeCompletedStatus, onCompletedTasks, data,}) => {
    const spanStyle = {
        textDecoration: todo.completed ? 'line-through' : '',
        color: todo.completed ? 'grey' : '#000'
    }

    const twoFunction = () => {
        onChangeCompletedStatus(todo.id);
        onCompletedTasks(data)
    } 

    return(
        <div className="todo-item">
            <div className="readiness">
                <input onClick={() => twoFunction()} type="checkbox"/>
                <span style={spanStyle}>{todo.task}</span>
            </div>
            <div className="delete-edit">
                <button onClick={() => onDeleteTodo(todo.id)}><i className="fa-solid fa-trash-can"></i></button>
                <button><i className="fa-sharp fa-solid fa-pen"></i></button>
            </div>
        </div>
    )
}


export { TodoItem }
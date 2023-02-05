import React from "react";
import { useEffect } from "react";
import './footer.css'
import 'bootstrap';

const Footer = ({onCompletedTasks, data, onActiveTodoData, onCompletedTodoData, onAllTodoData}) => {
    useEffect(() => {
        onCompletedTasks(data)
    })
    return(
        <div className="footer">
            <div className="completedTasks">
                <span id="span"></span>
            </div>
            <div className="filters">
                <button type="button" className="btn btn-secondary" onClick={() => onAllTodoData()}>all</button>
                <button type="button" className="btn btn-secondary" onClick={() => onActiveTodoData(data)}>active</button>
                <button type="button" className="btn btn-secondary" onClick={() => onCompletedTodoData(data)}>completed</button>
            </div>
        </div>
    )
}


export { Footer }
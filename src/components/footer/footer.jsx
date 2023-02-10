import React from "react";
import './footer.css'
import 'bootstrap';

const Footer = ({onCompletedTasks, data}) => {
    return(
        <div className="footer">
            <div className="completedTasks">
                <span  id="span">{onCompletedTasks(data)}</span>
            </div>
            <div className="filters">
                <button type="button" className="btn btn-secondary">all</button>
                <button type="button" className="btn btn-secondary">active</button>
                <button type="button" className="btn btn-secondary">completed</button>
            </div>
        </div>
    )
}


export { Footer }
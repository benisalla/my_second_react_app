import React from "react";
import './Task.css';

const Task = (props) =>{

    const ClickEventHandler = (event) => {
        props.onClickEventHandler(event.target.getAttribute('value'));
    }

    return (
        <div className="Task-container" value={props.Num} onClick={ClickEventHandler}>
            <h2 className="Task-title">Task {props.Num} : </h2>
            <h2 className="Task-Name">{props.Name}</h2>
        </div>
    );
}

export default Task;
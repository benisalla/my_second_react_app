import React, {State, useState} from "react";
import './TaskInPut.css';

const TaskInPut = (props) => {

    const [enteredData, setEnteredData] = useState("");
    const [invalidINput, setInvalidINput] = useState("");

    const InputChangeHandler = (event) =>{
        setEnteredData(event.target.value);
    }

    const resetInvalidInputHandler = () =>{
        setInvalidINput("");
    }
    
    const ClickHandler = () =>{
        if(enteredData === ""){
            setInvalidINput("invalid-data");
        }
        else{
            props.onInputChange(enteredData);
        }
    }

    return (
        <div className={"TaskInPut-container " + invalidINput}>
            <h1 className="TaskInPut-title">Task Manager</h1>
            <input onChange={InputChangeHandler} onFocus={resetInvalidInputHandler}  className="TaskInPut-input" />
            <button onClick={ClickHandler} className="TaskInPut-btn">Add Task</button>
        </div>
    );
}

export default TaskInPut;
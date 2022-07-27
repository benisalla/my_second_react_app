import React from "react";
import Task from "./Task";
import './TaskOutPut.css';

const TaskOutPut = (props) => {

    const ClickEventHandler = (index) => {
        props.onDeleteClickHandler(index);
    }

    return (
        <div className="TaskOutPut-container">
            {
                props.FData.length === 0 ? <h1 className="No-Tasks">there is not task for the moment</h1> :
                    props.FData.map((element, index) => {
                        return <Task key={element.ID} Name={element.name} Num={index + 1} onClickEventHandler={ClickEventHandler} />
                    })
            }
        </div>
    );
}

export default TaskOutPut;
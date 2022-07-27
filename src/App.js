import React, { useState } from "react";
import './App.css'
import TaskInPut from "./Componenets/TaskInPut";
import TaskOutPut from "./Componenets/TaskOutPut";

const App = () =>{
  const [Tasks, setTasks] = useState([]);
  const [TaskExist, setTaskExist] = useState("");
  
  const createNewID = () =>{
      let ID = "";
      for(let i=0 ; i< 6 ; i++)
          ID += String.fromCharCode(parseInt(Math.random()*66)+48);
      return ID;
  }

  const InputChangeHandler = (newData) =>{

    const arr = Tasks.filter((element) => {
      return element.name === newData;
    })

    if(arr.length !==0 ){
      setTaskExist("TaskExist");
      setTimeout(() => {
        setTaskExist("");
      }, 1000);
    
    }
    else{
      setTaskExist("");
      setTasks([
          {name: newData ,ID : createNewID()},
          ...Tasks
      ])
    }
    
  }

  const DeleteClickHandler = (index) =>{
    console.log("element "+index+" was deleted seccussfully");
    const NewTasks = Tasks.filter((element,ind) =>{
      return ind !== index-1;
    })
    setTasks([...NewTasks])
  }

  return (
    <div className={"App-container " + TaskExist}>
      <TaskInPut onInputChange={InputChangeHandler}/>
      <TaskOutPut FData = {Tasks} onDeleteClickHandler={DeleteClickHandler}/>
    </div>
  );
}

export default App;
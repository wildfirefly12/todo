import React, {useState} from "react";

import "./AddItems.css";

import AddTask from "./AddTask";
import AddCategory from "./AddCategory";

const AddItems = (props) => {

    const [state, setState] = useState("none");

    const handleState = (event) => {
        setState(event.target.value);
    }

    const display = () => {
        switch(state){
            case "none":
                return (
                    <div>
                        <button className={"button"} onClick={handleState} value={"Add Category"}>Add Category</button>
                        <button className={"button"} onClick={handleState} value={"Add Task"}>Add Task</button>
                    </div>
                );
            case "Add Category":
                return <AddCategory onAddCategory={props.onAddCategory} handleState={handleState}/>;
            case "Add Task":
                return <AddTask onAddTask={props.onAddTask} categories={props.categories} handleState={handleState}/>;
            default:
               return (
                   <div>
                       <button className={"button"} onClick={handleState} value={"Add Category"}>Add Category</button>
                       <button className={"button"} onClick={handleState} value={"Add Task"}>Add Task</button>
                   </div>
               );
        }
    }

    return (
        <div>
            {display()}
        </div>
    )
}

export default AddItems;
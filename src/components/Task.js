import React, {useState} from "react";

import "./Task.css";
import trash from "../img/delete.png";
import edit from "../img/edit.png";

const Task = (props) => {

    const deleteTaskHandler = (title) => {
        props.onTaskDelete(title);
    }

    const [editing, setEditing] = useState(false);

    const isEditing = () => {
        setEditing(!editing);
    }

    const [enteredTitle, setEnteredTitle] = useState(props.task.title);
    const [enteredDescription, setEnteredDescription] = useState(props.task.description);
    const [enteredCategory, setEnteredCategory] = useState();

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    }

    const handleEditTask = (event) => {
        event.preventDefault();

        const task = {
            id: props.task.id,
            title: enteredTitle,
            description: enteredDescription,
            category: props.task.category
        }

        props.onTaskEdit(task);
        isEditing();
    }

    const showEditing = () => {
        if(editing){
            return(
                <form onSubmit={handleEditTask}>
                    <input className={"editTaskTitle"} onChange={titleChangeHandler} type={"text"} defaultValue={props.task.title}/>
                    <textarea className={"editTaskDescription"} onChange={descriptionChangeHandler} type={"text"} defaultValue={props.task.description}/>
                    <button className={"editButtons"} type={"submit"}>Submit</button>
                    <button className={"editButtons"} onClick={isEditing}>Cancel</button>
                </form>
            )
        } else {
            return (
                <div>
                    <h3 className={"taskTitle"}>{props.task.title}</h3>
                    <p className={"taskDescription"}>{props.task.description}</p>
                    <button className={"deleteTaskButton"} onClick={deleteTaskHandler.bind(this, props.task.title)}><img src={trash} className={"deleteTaskImg"}/></button>
                    <button className={"editTaskButton"} onClick={isEditing}><img src={edit} className={"editTaskImg"}/></button>
                </div>
            )
        }
    }

    return (
        <div className={"task"}>
            {showEditing()}
        </div>
    )
}

export default Task;
import React, {useState} from "react";

import "./AddTask.css";

const AddTask = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const handleAddTask = () => {

        const task = {
            id: Math.random().toString(),
            title: enteredTitle,
            description: enteredDescription,
            categoryId: props.category.id
        }

        props.onAddTask(task);
        props.handleSearchTasks("");
        props.setAddingState(props.category);
    }

    return (
        <div className={"addTask"}>
            <p className={"addTaskTitle"}>Add a task</p>
            <form onSubmit={handleAddTask}>
                <input className={"inputTitle"} type={"text"} onChange={titleChangeHandler} value={enteredTitle}/>
                <textarea className={"inputDescription"} type={"text"} onChange={descriptionChangeHandler} value={enteredDescription}/>
                <button className={"taskButton"} type={"submit"}>Add</button>
                <button className={"taskButton"} value={"none"} onClick={props.setAddingState}>Cancel</button>
            </form>
        </div>
    )
}

export default AddTask;
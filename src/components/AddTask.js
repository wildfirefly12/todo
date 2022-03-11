import React, {useState} from "react";

import "./AddTask.css";

const AddTask = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
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

    const handleAddTask = (event) => {
        event.preventDefault();

        const task = {
            id: Math.random().toString(),
            title: enteredTitle,
            description: enteredDescription,
            category: enteredCategory
        }

        props.onAddTask(task);
    }

    return (
        <div className={"addTask"}>
            <p className={"addTaskTitle"}>Add a task</p>
            <form onSubmit={handleAddTask}>
                <input className={"field"} type={"text"} onChange={titleChangeHandler} value={enteredTitle}/>
                <input className={"field"} type={"text"} onChange={descriptionChangeHandler} value={enteredDescription}/>
                <select className={"field"} onChange={categoryChangeHandler}>
                    <option>Select Category</option>
                    {props.categories.map(category =>
                        <option key={category.id} value={category.name}>{category.name}</option>
                    )}
                </select>
                <button className={"taskButton"} type={"submit"} >Add</button>
                <button className={"taskButton"} value={"none"} onClick={props.handleState}>Cancel</button>
            </form>
        </div>
    )
}

export default AddTask;
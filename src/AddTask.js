import React, {useState} from "react";

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
        <form onSubmit={handleAddTask}>
            <input type={"text"} onChange={titleChangeHandler} value={enteredTitle}/>
            <input type={"text"} onChange={descriptionChangeHandler} value={enteredDescription}/>
            <select onChange={categoryChangeHandler}>
                <option>Select Category</option>
                {props.categories.map(category =>
                    <option key={category.id} value={enteredCategory}>{category.name}</option>
                )}
            </select>
            <button type={"submit"} >Add</button>
        </form>
    )
}

export default AddTask;
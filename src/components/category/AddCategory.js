import React, {useState} from "react";

import "./AddCategory.css";

const AddCategory = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const handleAddCategory = (event) => {
        event.preventDefault();

        const category = {
            id: Math.random().toString(),
            name: enteredTitle
        }

        props.onAddCategory(category);
    }

    return (
        <div className={"addCategory"}>
            <p className={"categoryTitle"}>Add a category</p>
            <form onSubmit={handleAddCategory}>
                <input className={"field"} type={"text"} onChange={titleChangeHandler} value={enteredTitle}/>
                <button className={"categoryButton"} type={"submit"} >Add</button>
                <button className={"categoryButton"} value={"none"} onClick={props.handleState}>Cancel</button>
            </form>
        </div>
    )
}

export default AddCategory;
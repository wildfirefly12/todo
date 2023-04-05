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

        props.addCategoryHandler(category);
        props.setAddingCategoryState();
    }

    return (
        <div className={"addCategory"}>
            <p className={"categoryTitle"}>Add a category</p>
            <form onSubmit={handleAddCategory}>
                <input className={"inputCategory"} type={"text"} onChange={titleChangeHandler} value={enteredTitle}/>
                <button className={"categoryButton"} type={"submit"} >Add</button>
                <button className={"categoryButton"} value={"none"} onClick={props.setAddingCategoryState}>Cancel</button>
            </form>
        </div>
    )
}

export default AddCategory;
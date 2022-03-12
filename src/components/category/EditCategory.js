import React, {useState} from "react";

import "./AddCategory.css";

const EditCategory = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const handleEditCategory = (event) => {
        event.preventDefault();

        const category = {
            id: props.category.id,
            name: enteredTitle
        }

        props.onCategoryEdit(props.category.name, category);
    }

    return (
        <div>
            <p className={"categoryTitle"}>Edit category</p>
            <form onSubmit={handleEditCategory}>
                <input type={"text"} onChange={titleChangeHandler} value={enteredTitle}/>
                <button type={"submit"}>Edit</button>
                <button onClick={props.setEditState}>Cancel</button>
            </form>
        </div>
    )
}

export default EditCategory;
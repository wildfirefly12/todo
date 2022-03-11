import React from "react";

import "./Category.css";
import Task from "./Task";

const Category = (props) => {

    const showTask = (task, category) => {
        if(task.category === category){
            return (
                <Task key={task.id} title={task.title} description={task.description} />
            )
        }
    }

    const deleteCategoryHandler = (event) => {
        var name = event.target.value;
        event.preventDefault();
        props.onCategoryDelete(name);
    }

    return (
        <div className={"category"}>
            <h2 className={"title"}>{props.name}</h2>
            <button onClick={deleteCategoryHandler} value={props.name}>Delete</button>
            {props.tasks.map(task =>
                showTask(task, props.title)
            )}
        </div>
    )
}

export default Category
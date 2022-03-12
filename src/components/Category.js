import React from "react";

import "./Category.css";
import Task from "./Task";

const Category = (props) => {

    const showTask = (task, category) => {
        if(task.category === category){
            return (
                <Task key={task.id} title={task.title} description={task.description} onTaskDelete={props.onTaskDelete}/>
            )
        }
    }

    const deleteCategoryHandler = (name) => {
        props.onCategoryDelete(name);
    }

    return (
        <div className={"category"}>
            <h2 className={"title"}>{props.name}</h2>
            <button onClick={deleteCategoryHandler.bind(this, props.name)}>Delete</button>
            {props.tasks.map(task =>
                showTask(task, props.name)
            )}
        </div>
    )
}

export default Category
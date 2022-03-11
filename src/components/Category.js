import React from "react";

import "./Category.css";
import Task from "./Task";

const Category = (props) => {

    const showTask = (task, category) => {
        if(task.category == category){
            return (
                <Task key={task.id} title={task.title} description={task.description} />
            )
        }
    }

    return (
        <div className={"category"}>
            <h2 className={"title"}>{props.title}</h2>
            {props.tasks.map(task =>
                showTask(task, props.title)
            )}
        </div>
    )
}

export default Category
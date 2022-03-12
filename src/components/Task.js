import React from "react";

import "./Task.css";

const Task = (props) => {

    const deleteTaskHandler = (title) => {
        props.onTaskDelete(title);
    }

    return (
        <div className={"task"}>
            <h3>{props.title}</h3>
            <button onClick={deleteTaskHandler.bind(this, props.title)}>Delete</button>
            <p>{props.description}</p>
        </div>
    )
}

export default Task;
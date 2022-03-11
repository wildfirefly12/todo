import React from "react";

import "./Task.css";

const Task = (props) => {


    return (
        <div className={"task"}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Task;
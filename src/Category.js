import React from "react";

import "./Category.css";
import Task from "./Task";

const Category = (props) => {


    return (
        <div className={"category"}>
            <h2>{props.title}</h2>
            {props.tasks.map(task =>
                <Task key={task.id} title={task.title} description={task.description} />
            )}
        </div>
    )
}

export default Category
import React, {useState} from "react";

import "./Category.css";
import Task from "../Task";
import EditCategory from "./EditCategory";

const Category = (props) => {

    const showTask = (task, category) => {
        if(task.category === category){
            return (
                <Task key={task.id} task={task} onTaskDelete={props.onTaskDelete} onTaskEdit={props.onTaskEdit}/>
            )
        }
    }

    const deleteCategoryHandler = (name) => {
        props.onCategoryDelete(name);
    }

    const [state, setState] = useState(false);

    const setEditState = () => {
        setState(!state);
    }

    const showEdit = () => {
        if(state){
            return(
                <EditCategory onCategoryEdit={props.onCategoryEdit} category={props.category} setEditState={setEditState}/>
            )
        }
        return (
            <div>
                <h2 className={"title"}>{props.name}</h2>
                <button onClick={deleteCategoryHandler.bind(this, props.name)}>Delete</button>
                <button onClick={setEditState}>Edit</button>
            </div>
        );
    }

    return (
        <div className={"category"}>

            {showEdit()}
            {props.tasks.map(task =>
                showTask(task, props.name)
            )}
        </div>
    )
}

export default Category
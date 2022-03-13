import React, {useEffect, useState} from "react";

import "./Category.css";
import Task from "../Task";
import EditCategory from "./EditCategory";
import trash from "../../img/delete.png";
import edit from "../../img/edit.png";
import add from "../../img/add.png";


const Category = (props) => {

    const countTasks = () => {
        return props.tasks.filter(t => t.category === props.category.name).length;
    }

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
                <p className={"taskCounter"}>{countTasks()}</p>
                <h2 className={"title"}>{props.category.name}</h2>
                <button className={"deleteCategoryButton"} onClick={deleteCategoryHandler.bind(this, props.category.name)}><img src={trash} alt={'delete'}/></button>
                <button className={"editCategoryButton"} onClick={setEditState}><img src={edit} alt={'edit'}/></button>
                <button className={"addTaskButton"} onClick={props.setAddingState.bind(this, props.category.name)}><img src={add} alt={'add'}/></button>
            </div>
        );
    }

    return (
        <div className={"category"}>
            {showEdit()}
            {props.tasks.map(task =>
                showTask(task, props.category.name)
            )}
        </div>
    )
}

export default Category
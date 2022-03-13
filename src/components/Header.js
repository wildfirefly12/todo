import React, {useState} from "react";

import "./Header.css";

import Search from "./Search";
import add from "../img/add.png";

const Header = (props) => {

    const [toggleDisplay, setToggleDisplay] = useState(false);

    const toggleDisplayPrompt = () => {
        setToggleDisplay(!toggleDisplay);
    }

    const displayPrompt = () => {
        if(toggleDisplay){
            return <div className={"addCatBtnPrompt"}>Add Category</div>
        }
    }

    return (
        <div>
            <Search className={"search"} handleSearchTasks={props.handleSearchTasks} handleClearSearch={props.handleClearSearch}/>
            <button className={"addCategoryButton"} onMouseOver={toggleDisplayPrompt} onClick={props.setAddingCategoryState}><img className={"addCategoryBtnImg"} src={add} alt={'add'}/></button>
            {displayPrompt()}
        </div>
    )
}

export default Header;
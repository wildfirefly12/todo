import React from "react";

import "./Search.css";

const Search = () => {



    return (
        <form className={"search"}>
            <input className={"searchField"} type={"text"}/>
            <button className={"searchButton"}>Search</button>
        </form>
    )
}

export default Search;
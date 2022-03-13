import React, {useState} from "react";

import "./Search.css";

const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState();

    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        props.handleSearchTasks(searchTerm);
    }

    const handleClear = (event) => {
        event.preventDefault();
        props.handleClearSearch();
    }

    return (
        <form className={"search"} onSubmit={handleSearch}>
            <input className={"searchField"} onChange={handleSearchTerm} type={"text"}/>
            <button className={"searchButton"}>Search</button>
            <button className={"searchButton"} onClick={handleClear}>Clear</button>
        </form>
    )
}

export default Search;
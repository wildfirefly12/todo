import React from "react";

import "./Header.css";

import Search from "./Search";

const Header = () => {
    return (
        <div>
            <Search className={"search"}/>
        </div>
    )
}

export default Header;
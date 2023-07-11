import React from 'react';
import '../styles/Menu.css';
import {ReactComponent as MainLogo} from "../assets/main-logo.svg";
import AddButton from "./AddButton";

const Menu = () => {

    return (
        <div className="menu">
            <a href="/"><MainLogo/></a>
            <AddButton/>
        </div>
    );
};

export default Menu;
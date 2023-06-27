import React from 'react';
import '../styles/Menu.css'
import {ReactComponent as MainLogo} from "../assets/main-logo.svg";
import {ReactComponent as AddLogo} from "../assets/add-logo.svg"

const Menu = () => {
    return (
        <div className="Menu">
            <a href="/"><MainLogo/></a>
            <button className="addButton"><AddLogo/></button>
        </div>
    );
};

export default Menu;
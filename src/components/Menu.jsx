import React from 'react';
import '../styles/Menu.css';
import {ReactComponent as MainLogo} from "../assets/main-logo.svg";
import AddButton from "./AddButton";
import {Link} from "react-router-dom";

const Menu = () => {

    return (
        <div className="menu">
            <Link to="/"><MainLogo/></Link>
            <AddButton/>
        </div>
    );
};

export default Menu;
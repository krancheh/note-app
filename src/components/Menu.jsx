import React from 'react';
import '../styles/Menu.css';
import {ReactComponent as MainLogo} from "../assets/main-logo.svg";
import AddButton from "./AddButton";
import {Link} from "react-router-dom";
import Footer from "./Footer";

const Menu = ({withNoteList}) => {

    return (
        <div className="menu">
            <Link to="/"><MainLogo/></Link>
            {
                withNoteList ? <div></div> : <AddButton/>
            }
            <Footer/>
        </div>
    );
};

export default Menu;
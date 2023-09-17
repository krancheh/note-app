import React from 'react';
import '../../styles/common/Menu.css';
import AddButton from "../notes/AddButton";
import Footer from "./Footer";
import MainLogo from "./MainLogo";

const Menu = ({withNoteList}) => {

    return (
        <div className="menu">
            <MainLogo/>
            {
                withNoteList ? <div></div> : <AddButton/>
            }
            <Footer/>
        </div>
    );
};

export default Menu;
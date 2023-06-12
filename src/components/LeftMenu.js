import React from 'react';
import '../styles/LeftMenu.css'

const LeftMenu = () => {
    return (
        <div className="LeftMenu">
            <a href="/">MyNotes</a>
            <button className="addButton">+</button>
        </div>
    );
};

export default LeftMenu;
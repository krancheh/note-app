import React from 'react';
import '../styles/Menu.css'
import {ReactComponent as MainLogo} from "../assets/main-logo.svg";
import {ReactComponent as AddLogo} from "../assets/add-logo.svg"
import {useDispatch} from "react-redux";
import {addNote} from "../store/notesSlice";

const Menu = () => {

    const colors = {
        default: '#fff875',
        green: '#93ff75',
        blue: '#98b3ff',
        red: '#ff7575',
    }
    const dispatch = useDispatch();
    const addNoteHandler = (color) => {
        dispatch(addNote({color}));
    }

    return (
        <div className="Menu">
            <a href="/"><MainLogo/></a>
            <div className="buttons">
                <button className="add-button" onClick={() => addNoteHandler(colors.default)}><AddLogo/></button>
                <div className="dropdown-menu">
                    <button className="colored-button" onClick={() => addNoteHandler(colors.default)}></button>
                    <button className="colored-button" onClick={() => addNoteHandler(colors.green)}></button>
                    <button className="colored-button" onClick={() => addNoteHandler(colors.blue)}></button>
                    <button className="colored-button" onClick={() => addNoteHandler(colors.red)}></button>
                </div>
            </div>

        </div>
    );
};

export default Menu;
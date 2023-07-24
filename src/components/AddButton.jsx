import React from 'react';
import {ReactComponent as AddLogo} from "../assets/add-logo.svg";
import "../styles/AddButton.css"
import {useDispatch} from "react-redux";
import {addNote} from "../store/notesSlice";

const AddButton = ({floating}) => {

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

    // const showAddButtons = (e) => {
    //     e.target.classList.toggle('show');
    // }


    return (
        <div className={`buttons ${floating ? 'floating' : ''}`}>
            <button className="add-button" onClick={() => addNoteHandler(colors.default)}><AddLogo/></button>
            <div className="dropdown-menu">
                <button className="colored-button" onClick={() => addNoteHandler(colors.default)}></button>
                <button className="colored-button" onClick={() => addNoteHandler(colors.green)}></button>
                <button className="colored-button" onClick={() => addNoteHandler(colors.blue)}></button>
                <button className="colored-button" onClick={() => addNoteHandler(colors.red)}></button>
            </div>
        </div>
    );
};

export default AddButton;
import React from 'react';
import {ReactComponent as AddLogo} from "../../assets/icons/add-logo.svg";
import "../../styles/common/AddButton.css"
import {useDispatch} from "react-redux";
import {addNote} from "../../store/notesSlice";

const AddButton = ({floating}) => {

    const colors = {
        default: '#fff992',
        green: '#93ff75',
        blue: '#9bb6ff',
        red: '#ff8080',
    }
    const dispatch = useDispatch();

    const addNoteHandler = (color) => {
        dispatch(addNote(color));
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }

    const showAddButtons = (e) => {
        e.target.closest('.buttons').classList.toggle('show');
    }


    return (
        <div className={`buttons ${floating ? 'floating' : ''}`}>
            <button className="add-button" onClick={showAddButtons}><AddLogo/></button>
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
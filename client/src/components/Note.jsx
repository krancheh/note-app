import React, {useState} from 'react';
import '../styles/Note.css';
import editLogo from '../assets/edit-icon.svg'
import {ReactComponent as DeleteIcon} from "../assets/delete-icon.svg";

const Note = ({note}) => {
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);

    return (
        <div className='Note'>
            <h2 className='note-title'>{title}</h2>
            <p className='note-text'>{text}</p>
            <p className='note-date'>June 14, 2023</p>
            <button className='edit-button'><img alt='edit' src={editLogo}/></button>
            <button className='delete-button'><DeleteIcon/></button>
        </div>
    );
};


export default Note;
import React, {useState} from 'react';
import '../styles/Note.css';
import editLogo from '../assets/edit-icon.svg'

const Note = (props) => {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);


    return (
        <div className='Note'>
            <h2 className='note-title'>{title}</h2>
            <p className='note-text'>{text}</p>
            <p className='note-date'>June 14, 2023</p>
            <button className='edit-button'><img alt='edit' src={editLogo}/></button>
        </div>
    );
};


export default Note;
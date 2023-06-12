import React, {useState} from 'react';
import '../styles/Note.css';

const Note = (props) => {
    const [title, setTitle] = useState(props.title);
    const [text, setText] = useState(props.text);

    return (
        <div className='Note'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
};



export default Note;
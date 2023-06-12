import React, {useState} from 'react';
import Note from "./Note";
import '../styles/NoteList.css'

const NoteList = (props) => {
    const [notes, setNotes] = useState(props.notes);

    return (
        <div className="NoteList">
            {notes.map((note) => {
                return <Note key={note.id} title={note.title} text={note.text}></Note>
            })}
        </div>
    );
};

export default NoteList;
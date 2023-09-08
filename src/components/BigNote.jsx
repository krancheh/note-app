import React, {useState} from 'react';
import formatDate from "../common/formatDate";
import "../styles/BigNote.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateNote} from "../store/notesSlice";

const BigNote = ({note}) => {


    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const dispatch = useDispatch();

    const formattedDate = formatDate(note.date);

    const contentChangeHandler = (e) => {
        setContent(e.target.value);
    }
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const saveChanges = () => {
        if (title !== note.title || content !== note.content) {
            const newNote = {id: note.id, title, content, date: new Date().getTime()}
            console.log(content)
            dispatch(updateNote({newNote}))
        }
    }

    return (
        <div className="big-note-wrapper" style={{backgroundColor: note.color}}>
            <div className="big-note">
                <Link className="big-note__back-button" to="/note-app/notes">{"< Back to notes"}</Link>
                <h1><input
                    className="big-note__title"
                    defaultValue={title}
                    type="text"
                    maxLength={25}
                    onChange={titleChangeHandler}
                    onBlur={saveChanges}
                ></input></h1>
                <textarea
                    className="big-note__content"
                    defaultValue={content}
                    onChange={contentChangeHandler}
                    onBlur={saveChanges}
                    autoFocus
                >
                </textarea>
                <p className="big-note__date">{`${formattedDate}  - ${content.length} symbols`}</p>
            </div>
        </div>
    );
};

export default BigNote;
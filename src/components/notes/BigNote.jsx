import React, {useState} from 'react';
import formatDate from "../../common/formatDate";
import "../../styles/notes/BigNote.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoading, updateNote} from "../../store/notesSlice";
import Loading from "../common/Loading";

const BigNote = ({note}) => {


    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch();

    const formattedDate = formatDate(note.updatedAt);

    const contentChangeHandler = (e) => {
        setContent(e.target.value);
    }
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const saveChanges = () => {
        if (title !== note.title || content !== note.content) {
            const newNote = {id: note.id, title, content}
            dispatch(updateNote(newNote))
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
            {isLoading ? null : <Loading/>}
        </div>
    );
};

export default BigNote;
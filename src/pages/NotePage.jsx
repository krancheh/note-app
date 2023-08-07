import React from 'react';
import {useSelector} from "react-redux";
import {selectNotes} from "../store/notesSlice";
import {useParams} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Menu from "../components/Menu";
import BigNote from "../components/BigNote";
import "../styles/Page.css"
import "../styles/NotePage.css"

const NotePage = () => {

    const {id} = useParams()

    const notes = useSelector(selectNotes);
    const note = notes.filter(note => note.id === id)[0];   // заменить на запрос к бд

    if (note) {
        return (
            <div className="page note-page">
                <Menu withNoteList={true}/>
                <main>
                    <BigNote note={note}/>
                </main>
            </div>
        );
    } else {
        console.log('NOt fouund ebat')
        return (
            <NotFoundPage/>
        )
    }


};

export default NotePage;
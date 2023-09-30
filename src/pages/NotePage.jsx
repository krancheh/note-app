import React from 'react';
import {Link, useParams} from "react-router-dom";
import Menu from "../components/common/Menu";
import BigNote from "../components/notes/BigNote";
import "../styles/common/Page.css"
import "../styles/notes/NotePage.css"
import {useGetNotesQuery} from "../features/notes/notesAPI";
import Loading from "../components/common/Loading";
import NoteList from "../components/notes/NoteList";

const NotePage = () => {
    const {id} = useParams();
    console.log(id)
    const {note, isFetching} = useGetNotesQuery(undefined, {
        selectFromResult: ({data}) => ({
            note: data?.find((note) => note.id === +id),
        }),
    });

    if (isFetching) return <Loading/>
    return (
        <div className="page note-page">
            <Menu withNoteList={true}/>
            <div style={{display: 'none'}}>
                <NoteList/>
            </div>
            <main>
                {note
                    ? <BigNote note={note}/>
                    : <div>
                        <p style={{textAlign: 'center', fontSize: '30px'}}>Note not found</p>
                        <Link to={'../notes'}>Back to all notes</Link>
                    </div>}
            </main>
        </div>
    );
};

export default NotePage;
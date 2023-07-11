import Note from "./Note";
import '../styles/NoteList.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, selectFilteredNotes, selectViewMode} from "../store/notesSlice";
import {useState} from "react";
import ConfirmationModal from "./ConfirmationModal";

const NoteList = () => {

    const filteredNotes = useSelector(selectFilteredNotes)
    const viewMode = useSelector(selectViewMode);
    const deleteModalButtons = [
        {text: 'Delete', red: true, clickHandler: confirmDeleteHandler},
        {text: 'Cancel', clickHandler: cancelDeleteHandler}
    ]

    const [isDelModalActive, setIsDelModalActive] = useState(false);  // modal state
    const [selectedNote, setSelectedNote] = useState(null);

    const dispatch = useDispatch();

    function confirmDeleteHandler() {
        setIsDelModalActive(false);
        dispatch(deleteNote({id: selectedNote.id}));
    }

    function cancelDeleteHandler() {
        setIsDelModalActive(false);
        setSelectedNote(null);
    }

    return (
        <>
            <div className={`note-list ${viewMode}`}>
                {filteredNotes.map((note) => {
                    return <Note
                        setIsDelModalActive={setIsDelModalActive}
                        setSelectedNote={setSelectedNote}
                        key={note.id}
                        note={note}
                    />
                })}
            </div>

            <ConfirmationModal
                active={isDelModalActive}
                setActive={setIsDelModalActive}
                text={`Delete "${selectedNote?.title}"?`}
                buttons={deleteModalButtons}
            />
        </>

    );
};

export default NoteList;
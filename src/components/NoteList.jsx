import Note from "./Note";
import '../styles/NoteList.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, selectFilteredNotes, selectViewMode} from "../store/notesSlice";
import {useState} from "react";
import ConfirmationModal from "./ConfirmationModal";
import {CSSTransition, TransitionGroup} from "react-transition-group";

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
            <TransitionGroup className={`note-list ${viewMode}`}>
                {filteredNotes.map((note) => (
                    <CSSTransition key={note.id} classNames="note" timeout={350}>
                        <Note
                            setIsDelModalActive={setIsDelModalActive}
                            setSelectedNote={setSelectedNote}
                            note={note}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>

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
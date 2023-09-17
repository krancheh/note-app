import Note from "./Note";
import '../../styles/notes/NoteList.css'
import {useDispatch, useSelector} from "react-redux";
import {
    deleteNotes,
    getNotes,
    selectFilteredNotes, selectIsLoading,
    selectViewMode
} from "../../store/notesSlice";
import {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loading from "../common/Loading";
import Modal from "../common/Modal";

const NoteList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch])
    const filteredNotes = useSelector(selectFilteredNotes)
    const viewMode = useSelector(selectViewMode);
    const isLoading = useSelector(selectIsLoading);

    const [isDelModalActive, setIsDelModalActive] = useState(false);  // modal state

    const [selectedNotes, setSelectedNotes] = useState([]);

    function confirmDeleteHandler() {
        setIsDelModalActive(false);
        dispatch(deleteNotes(selectedNotes));
        setTimeout(() => setSelectedNotes([]), 200)
    }

    function cancelDeleteHandler() {
        setIsDelModalActive(false);
        setTimeout(() => setSelectedNotes([]), 200)
    }

    function selectNote(noteId) {
        setSelectedNotes([...selectedNotes, noteId])
    }

    return (
        <>
            {isLoading ? <Loading/> :
                <TransitionGroup className={'note-list ' + viewMode}>
                    {filteredNotes.map((note) => (
                        <CSSTransition key={note.id} classNames="note" timeout={350}>
                            <Note
                                setIsDelModalActive={setIsDelModalActive}
                                selectNote={selectNote}
                                note={note}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>}

            <Modal active={isDelModalActive} setActive={setIsDelModalActive} onClose={cancelDeleteHandler}>
                <h2 className="modal-title">{`Delete note №${selectedNotes}?`}</h2>
                <div className="modal-buttons">
                    <button className={'modal-button red'} onClick={confirmDeleteHandler}>Delete</button>
                    <button className={'modal-button'} onClick={cancelDeleteHandler}>Cancel</button>
                </div>
            </Modal>
        </>

    );
};

export default NoteList;
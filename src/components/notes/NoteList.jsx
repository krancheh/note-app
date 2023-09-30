import Note from "./Note";
import '../../styles/notes/NoteList.css'
import {useSelector} from "react-redux";
import {selectViewMode} from "../../features/notes/notesSlice";
import {useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loading from "../common/Loading";
import Modal from "../common/Modal";
import {
    useDeleteNotesMutation,
    useGetNotesQuery,
    useUpdateNoteMutation
} from "../../features/notes/notesAPI";
import ErrorPage from "../../pages/ErrorPage";

const NoteList = () => {
    const {data: notes, isLoading, isError, error} = useGetNotesQuery(); // fetching on mount and saving to store if success
    const {isLoading: isUpdating} = useUpdateNoteMutation({
        fixedCacheKey: 'update-from-note'
    });
    const [deleteNotes] = useDeleteNotesMutation();
    const viewMode = useSelector(selectViewMode);

    const [isDelModalActive, setIsDelModalActive] = useState(false);  // modal state
    const [selectedNotes, setSelectedNotes] = useState([]);


    const confirmDeleteHandler = async () => {
        setIsDelModalActive(false);
        console.log(selectedNotes)
        await deleteNotes(selectedNotes);
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
        <div className={'note-list-wrapper'}>
            {isError
                ? <ErrorPage error={error}/>
                : isLoading || isUpdating
                    ? <Loading/>
                    : notes.length
                        ? <TransitionGroup className={'note-list ' + viewMode}>
                            {notes.map((note) => (
                                <CSSTransition key={note.id} classNames="note" timeout={350}>
                                    <Note
                                        setIsDelModalActive={setIsDelModalActive}
                                        selectNote={selectNote}
                                        note={note}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                        : <i>Your note list is empty. Create new note by + button</i>
            }


            <Modal active={isDelModalActive} setActive={setIsDelModalActive} onClose={cancelDeleteHandler}>
                <h2 className="modal-title">{`Delete note №${selectedNotes}?`}</h2>
                <div className="modal-buttons">
                    <button className={'modal-button red'} onClick={confirmDeleteHandler}>Delete</button>
                    <button className={'modal-button'} onClick={cancelDeleteHandler}>Cancel</button>
                </div>
            </Modal>
        </div>

    );
};

export default NoteList;
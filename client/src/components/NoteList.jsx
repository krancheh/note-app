import Note from "./Note";
import '../styles/NoteList.css'
import {useSelector} from "react-redux";
import {selectFilteredNotes, selectViewMode} from "../store/notesSlice";

const NoteList = () => {
    const filteredNotes = useSelector(selectFilteredNotes)
    const viewMode = useSelector(selectViewMode);

    return (
        <div className={`NoteList ${viewMode}`}>
            {filteredNotes.map((note) => {
                return <Note key={note.id} note={note}></Note>
            })}
        </div>
    );
};

export default NoteList;
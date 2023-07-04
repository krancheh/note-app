import Note from "./Note";
import '../styles/NoteList.css'
import {useSelector} from "react-redux";
import {selectFilteredNotes} from "../store/notesSlice";

const NoteList = ({viewMode}) => {
    const filteredNotes = useSelector(selectFilteredNotes)

    return (
        <div className={`NoteList ${viewMode}`}>
            {filteredNotes.map((note) => {
                return <Note key={note.id} note={note}></Note>
            })}
        </div>
    );
};

export default NoteList;
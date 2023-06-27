import Note from "./Note";
import '../styles/NoteList.css'
import {useSelector} from "react-redux";

const NoteList = () => {
    const notes = useSelector(state => state.notes.notes)

    return (
        <div className="NoteList">
            {notes.map((note) => {
                return <Note key={note.id} note={note}></Note>
            })}
        </div>
    );
};

export default NoteList;
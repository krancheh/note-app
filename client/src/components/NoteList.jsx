import Note from "./Note";
import '../styles/NoteList.css'
import {useSelector} from "react-redux";
import {selectFilteredNotes} from "../store/notesSlice";

const NoteList = () => {
    const filteredNotes = useSelector(selectFilteredNotes)

    return (
        <div className="NoteList">
            {filteredNotes.map((note) => {
                return <Note key={note.id} id={note.id} title={note.title} content={note.content}
                             date={note.date} color={note.color}></Note>
            })}
        </div>
    );
};

export default NoteList;
import '../styles/Note.css';
import editLogo from '../assets/edit-icon.svg'
import {ReactComponent as DeleteIcon} from "../assets/delete-icon.svg";
import {useDispatch} from "react-redux";
import {deleteNote, updateNote} from "../store/notesSlice";

const Note = ({note}) => {

    const {id, title, content, date, color} = note;
    const dispatch = useDispatch();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    const dateObj = new Date(date);
    const formattedDate = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`

    const editNoteHandler = () => {
        dispatch(updateNote())
    }

    const deleteNoteHandler = () => {
        dispatch(deleteNote({id}))
    }

    return (
        <div className='Note Note-appear' style={{"backgroundColor": color}}>
            <h2 className='note-title'>{title}</h2>
            <p className='note-text'>{content}</p>
            <p className='note-date'>{formattedDate}</p>
            <button className='edit-button' onClick={editNoteHandler}><img alt='edit' src={editLogo}/></button>
            <div className="delete-zone">
                <button className='delete-button' onClick={deleteNoteHandler}><DeleteIcon/></button>
            </div>
        </div>
    );
};


export default Note;
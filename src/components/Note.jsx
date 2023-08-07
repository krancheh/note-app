import '../styles/Note.css';
// import editLogo from '../assets/edit-icon.svg'
import {ReactComponent as DeleteIcon} from "../assets/delete-icon.svg";
// import {useDispatch} from "react-redux";
// import {updateNote} from "../store/notesSlice";
import formatDate from "../common/formatDate";
import {useNavigate} from "react-router-dom";

const Note = ({note, setIsDelModalActive, setSelectedNote}) => {

    const {title, content, date, color} = note;
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const formattedDate = formatDate(date);
    // const editNoteHandler = () => {
    //     dispatch(updateNote())
    // }

    const deleteNoteHandler = () => {
        setIsDelModalActive(true);
        setSelectedNote(note);
    }

    const openNotePage = () => {
        navigate(note.id.toString());
    }


    return (
        <div className='note-wrapper'>
            <div className='note' onClick={openNotePage} style={{"backgroundColor": color}}>
                <h2 className='note-title'>{title}</h2>
                <p className='note-content'>{content}</p>
                <p className='note-date'>{formattedDate}</p>
                {/*<button className='edit-button' onClick={editNoteHandler}><img alt='edit' src={editLogo}/></button>*/}
            </div>
            <div className="delete-zone">
                <button className='delete-button' onClick={deleteNoteHandler}><DeleteIcon/></button>
            </div>
        </div>
    );
};


export default Note;
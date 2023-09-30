import '../../styles/notes/Note.css';
import {ReactComponent as DeleteIcon} from "../../assets/icons/delete-icon.svg";
import formatDate from "../../utils/formatDate";
import {useNavigate} from "react-router-dom";

const Note = ({note, setIsDelModalActive, selectNote}) => {

    const {title, content, updatedAt, color} = note;
    const navigate = useNavigate();

    const formattedDate = formatDate(updatedAt);

    const deleteNoteHandler = () => {
        setIsDelModalActive(true);
        selectNote(note.id);
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
            </div>
            <div className="delete-zone">
                <button className='delete-button' onClick={deleteNoteHandler}><DeleteIcon/></button>
            </div>
        </div>
    );
};


export default Note;
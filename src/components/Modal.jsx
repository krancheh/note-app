import '../styles/Modal.css'

const Modal = ({active, setActive, children}) => {

    const closeModal = () => {
        setActive(false);
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button className="close-button" onClick={closeModal}>×</button>
            </div>
        </div>
    );
};

export default Modal;
import '../../styles/common/Modal.css'

const Modal = ({active, setActive, children, onClose}) => {

    const closeModal = () => {
        setActive(false);
        onClose();
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
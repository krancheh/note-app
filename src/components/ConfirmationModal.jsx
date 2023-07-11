import Modal from "./Modal";

const ConfirmationModal = ({active, setActive, text, buttons}) => {
    return (
        <Modal active={active} setActive={setActive}>
            <h2>{text}</h2>
            <div className="modal-buttons">
                {buttons.map(button => {
                    return <button key={button.text} className={button.red ? "modal-button red" : "modal-button"} onClick={button.clickHandler}>
                        {button.text}
                    </button>
                })}
            </div>
        </Modal>
    );
};

export default ConfirmationModal;
import Modal from "./Modal";

const DeleteModal = () => {
    return (
        <Modal>
            <h2>Delete note?</h2>
            <div className="modal-buttons">
                <button>Yes</button>
                <button>No</button>
            </div>
        </Modal>
    );
};

export default DeleteModal;
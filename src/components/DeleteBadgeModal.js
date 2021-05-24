import React from 'react';

import Modal from './Modal';

function DeleteBadgeModal (props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge.</p>
        <div>
            <button className="btn btn-danger mr-4" onClick={props.onDeleteBadge}>
                Delete
            </button>
            <button className="btn btn-primary" onClick={props.onClose}>
                Cancel
            </button>
        </div>
    </Modal>
}

export default DeleteBadgeModal;
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

function ModelConfirm({ show, handleClose, handleConfirmDelete,id }) {

    const handleDelete = async () => {
        await handleConfirmDelete(id);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận xoá</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc chắn muốn xoá sản phẩm này?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Hủy
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Xoá
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModelConfirm;
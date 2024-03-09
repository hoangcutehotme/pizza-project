import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteContact } from '../../service/userService';
// import LoadingModal from '../Loading/Loading';
import Notify from '../../Notify/Notify';
import '../../Notify/Notify.css';
// import { useTranslation } from 'react-i18next';
// const DeleteConfirmationModal = ({ show, handleClose }) => {
    const DeleteConfirmationModal = ({ show, handleClose, handleDelete, id, action, data, setData }) => {
    // const {t} = useTranslation();
    // const [isLoading, setIsLoading] = useState(false)
    const [openNotify, setOpenNotify] = useState(false)
    const [message, setMessage] = useState("")

    const handleDeleteItem = async () => {
        if (action === 'contact') {
            // setIsLoading(true)
            const user = localStorage.getItem("user");
            const userData = JSON.parse(user);
            const contactIndex = userData.contact.findIndex(contact => contact._id === id);
            if (contactIndex !== -1) {
                userData.contact.splice(contactIndex, 1);
            }
            try {
                localStorage.setItem("user", JSON.stringify(userData));
                handleClose();
                const response = await deleteContact(id, userData._id)
                setData(userData.contact)
                setMessage("Xóa địa chỉ thành công")
                setOpenNotify(true)
                console.log(response)
            } catch (error) {
                setMessage("Xóa địa chỉ thất bại")
                setOpenNotify(true)
            }
            
        } 
        // else if (action === 'cart') {
        //     setIsLoading(true)
        //     handleDelete(id);
        //     handleClose();
        //     setIsLoading(false)
        // } else if (action === 'rating') {
        //     setIsLoading(true)
        //     handleClose();
        //     await deleteRating(id)
        //     const updatedRatings =Object.values(data).filter((rating) => rating._id !== id);
        //     setData(updatedRatings);
        //     setIsLoading(false)
        //     setMessage(`${t("deleteRating")}`)
        //     setOpenNotify(true)
        // }
    };
    return (
        <div>

            <Modal show={show} onHide={handleClose} style={{ zIndex: '100001' }}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:'red'}}>Cảnh báo xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                Bạn có chắc chắn muốn xóa mục này không
                </Modal.Body>
                <Modal.Footer className="justify-content-end">
                    <Button variant="secondary" onClick={handleClose}>
                    Không
                    </Button>
                    <Button variant="danger" onClick={handleDeleteItem} default>
                    Có
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* {isLoading && (<LoadingModal />)} */}
            {openNotify && (<Notify message={message} setOpenNotify={setOpenNotify} />)}
        </div>
    );
};

export default DeleteConfirmationModal;

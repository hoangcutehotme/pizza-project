import axiosInstance from '../../service/axiosInstance';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import LoadingModal from '../../component/Loading/Loading';

function ModelAddProduct({ show, handleClose }) {

    const notify = (er, message) => toast[er](message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: null,
        description: null,
        price: null,
        images: null,
        catName: 'Pizza',
    });


    const [image, setImage] = useState(null);

    const handleAddProduct = async () => {
        const data = {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            images: formData.images,
            catName: formData.catName,
        };

        if (
            formData.name === null || formData.description === null || formData.price === null || formData.images === null
        ) {

            notify("error", "Kiểm tra thông tin món ăn");
        } else {
            setIsLoading(true);
            try {
                let res = await axiosInstance.post('/api/product', data);
                notify("success", "Thêm thành công");
                handleClose();
            } catch (error) {
                notify("error", "Thêm không thành công");
            } finally {
                setIsLoading(false);
            }
        }


    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl); // Set the selected image as a file object
            setFormData({ ...formData, images: file });
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <Modal show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title><b>Thêm sản phẩm</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >

                        <Form.Group>
                            {!formData.images ? (
                                <div className='form-img-new-product'>
                                    <div className='box'>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            ) : (
                                <div className='form-img-new-product'>

                                    <img src={image} alt="Selected" style={{ width: '200px', marginTop: '10px', marginBottom: '10px' }} />


                                </div>
                            )}
                            <Form.Label className='label-form-add-product'>Hình ảnh</Form.Label>
                            <Form.Control type="file" name="image" onChange={handleImageChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Tên sản phẩm</Form.Label>
                            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Mô tả sản phẩm</Form.Label>
                            <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Giá tiền</Form.Label>
                            <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Danh mục</Form.Label>
                            <Form.Select name="category" value={formData.category} onChange={handleChange}>
                                <option value="Pizza">Pizza</option>
                                <option value="Thức uống">Đồ uống</option>
                            </Form.Select>
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={() => handleAddProduct()}
                    >
                        Thêm
                    </Button>
                </Modal.Footer>


            </Modal>
            {isLoading && (<LoadingModal />)}
        </>

    );
};

export default ModelAddProduct;

import axiosInstance from '../../../../service/axiosInstance';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import LoadingModal from '../../../../component/Loading/Loading';

function ModelDetailProduct({ show, handleClose, product }) {
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
    const [formData, setFormData] = useState({});

    const [image, setImage] = useState('');

    useEffect(() => {
        if (show) {
            console.log("Product ", product);
            setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                images: product.images,
                catName: product.category.catName,
            });
            setImage(product.images || ''); // Default to empty string if no image is available
        }
    }, [show, product]);

    const handleEditProduct = async () => {
        const { name, description, price, images, catName } = formData;

        // Check if any required fields are empty
        if (!name || !description || !price || !image) {
            notify("error", "Kiểm tra thông tin món ăn");
            return;
        }

        setIsLoading(true);



        try {
            // Prepare the data to be sent in the PUT request
            const data = new URLSearchParams();
            data.append("name", name);
            data.append("description", description);
            data.append("price", price);
            data.append("images", image);
            data.append("catName", catName);

            // Send the PUT request to update the product
            const res = await axiosInstance.put(`/api/product/${product.id}`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            notify("success", "Chỉnh sửa thành công");
            handleClose();
        } catch (error) {
            console.error('Error editing product:', error);
            notify("error", "Chỉnh sửa không thành công");
        } finally {
            setIsLoading(false);
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
            // console.log("print image url", reader.result);
            setImage(imageUrl);
            setFormData({ ...formData, images: file });
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title><b>Chi tiết món ăn</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            {formData.images ? (
                                <div className='form-img-new-product'>
                                    <img src={image} alt="Selected" style={{ width: '200px', marginTop: '10px', marginBottom: '10px' }} />
                                </div>
                            ) : (
                                <div className='form-img-new-product'>
                                    <div className='box'>
                                    </div>
                                </div>
                            )}
                            <Form.Label className='label-form-add-product'>Hình ảnh</Form.Label>
                            <Form.Control type="file" name="image" onChange={handleImageChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Tên sản phẩm</Form.Label>
                            <Form.Control type="text" name="name" value={formData.name || ''} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Mô tả sản phẩm</Form.Label>
                            <Form.Control type="text" name="description" value={formData.description || ''} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Giá tiền</Form.Label>
                            <Form.Control type="number" name="price" value={formData.price || ''} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Danh mục</Form.Label>
                            <Form.Control as="select" name="catName" value={formData.catName || ''} onChange={handleChange}>
                                <option value="Pizza">Pizza</option>
                                <option value="Thức uống">Đồ uống</option>
                            </Form.Control>
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label className='label-form-add-product'>Trạng thái</Form.Label>
                            <Form.Control as="select" name="catName" value={formData.catName || ''} onChange={handleChange}>
                                <option value="Pizza">Đang bán</option>
                                <option value="Thức uống">Hết bán</option>
                            </Form.Control>
                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleEditProduct}>Chỉnh sửa</Button>
                </Modal.Footer>
            </Modal>
            {isLoading && (<LoadingModal />)}
        </>
    );
};

export default ModelDetailProduct;

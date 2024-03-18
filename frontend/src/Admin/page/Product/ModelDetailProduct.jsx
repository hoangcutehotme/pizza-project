
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import LoadingModal from '../../component/Loading/Loading';
import { editProduct } from '../../service/productService';
import { fetchAllCategory } from '../../service/categoryService';
import './style.css'

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
    const [imageSelect, setImage] = useState('');
    const [listCategory, setListCategory] = useState([]);
    const [selectedAvailable, setSelectedAvailable] = useState(true);
    const [selectedOutOfOrder, setSelectedOutOfOrder] = useState(true);

    useEffect(() => {
        if (show) {
            setFormData({
                name: product.name,
                description: product.description || '',
                price: product.price,
                images: product.images,
                catName: product.category.catName,
                isOutofOrder: product.isOutofOrder,
                isAvailable: product.isAvailable
            });

            setSelectedAvailable(product.isAvailable);
            setSelectedOutOfOrder(product.isOutofOrder);

            setImage(product.images || '');
            getListCategory();
        }
    }, [show, product]);


    const handleAvailableChange = (event) => {
        if (event.target.value === "active") {
            setSelectedAvailable(true);
        } else {
            setSelectedAvailable(false);
            setSelectedOutOfOrder(true);
        }

    };

    const handleOutOfOrderChange = (event) => {

        if (event.target.value === "active") {
            setSelectedOutOfOrder(false);
        } else {
            setSelectedOutOfOrder(true);
        }

    };



    const getListCategory = async () => {
        setIsLoading(true);
        try {
            const res = await fetchAllCategory();

            if (res && res.data) {
                setListCategory(res.data);
            }

        } catch (e) {
            console.error('Error category:', e);
        } finally {
            setIsLoading(false);
        }
    }

    const handleEditProduct = async () => {
        const { name, description, price, images, catName } = formData;

        // Check if any required fields are empty
        if (!name || !price || !images) {
            notify("error", "Kiểm tra thông tin món ăn");
            return;
        }

        setIsLoading(true);


        try {
            // Prepare the data to be sent in the PUT request
            const data = new FormData();
            data.append("name", name);
            data.append("description", description ?? '');
            data.append("price", price);
            data.append("catName", catName);


            console.log("imageSelect ", selectedAvailable, " images ", selectedOutOfOrder);
            if (imageSelect !== images) {
                data.append("images", images);
                data.append("dels", product.images);
            }

            data.append("isAvailable", selectedAvailable);
            data.append("isOutofOrder", selectedOutOfOrder);

            const id = product.id;

            // Send the PUT request to update the product
            const res = await editProduct({ id, data });

            notify("success", "Chỉnh sửa thành công");
            handleClose();
            handleModalHide();
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
            setImage(imageUrl);
            setFormData({ ...formData, images: file });
        };
        reader.readAsDataURL(file);
    };

    const handleModalHide = () => {
        // Reset the form data and image state when the modal is closed
        setFormData({
            name: null,
            description: null,
            price: null,
            images: null,
            catName: 'Pizza',
        });
        setImage(null);
    };

    return (
        <>
            <Modal show={show} onHide={() => {
                handleClose();
                handleModalHide();
            }
            } size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title><b>Chi tiết món ăn</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            {formData.images ? (
                                <div className='form-img-new-product'>
                                    <img src={imageSelect} alt="Selected" style={{ width: '200px', marginTop: '10px', marginBottom: '10px' }} />
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
                            <Form.Label className='label-form-add-product'>Giá tiền (VNĐ)</Form.Label>
                            <Form.Control type="number" name="price" value={formData.price || ''} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Danh mục</Form.Label>
                            {listCategory && listCategory.length > 0 && (
                                <Form.Control as="select" name="catName" value={formData.catName || ''} onChange={handleChange}>
                                    {listCategory.map((item, index) => (
                                        <option key={index} value={item.catName}>{item.catName}</option>
                                    ))}
                                </Form.Control>
                            )}

                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Trạng thái</Form.Label>
                            <div className="radio-buttons">
                                <Form.Check
                                    type="radio"
                                    label="Đang bán"
                                    name="availableRadio"
                                    id="activeRadio"
                                    value="active"
                                    checked={selectedAvailable}
                                    onChange={handleAvailableChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Ngừng bán"
                                    name="availableRadio"
                                    id="inactiveRadio"
                                    value="inactive"
                                    checked={!selectedAvailable}
                                    onChange={handleAvailableChange}
                                />

                            </div>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label className='label-form-add-product'>Còn hàng</Form.Label>
                            <div className="radio-buttons">
                                <Form.Check
                                    type="radio"
                                    label="Còn hàng"
                                    name="radioButton"
                                    id="activeRadio"
                                    value="active"
                                    checked={!selectedOutOfOrder}
                                    onChange={handleOutOfOrderChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Hết hàng"
                                    name="radioButton"
                                    id="inactiveRadio"
                                    value="inactive"
                                    checked={selectedOutOfOrder}
                                    onChange={handleOutOfOrderChange}
                                />

                            </div>
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='custom-button' variant="primary" type="submit" onClick={handleEditProduct}>Chỉnh sửa</Button>
                </Modal.Footer>
            </Modal>
            {isLoading && (<LoadingModal />)}
        </>
    );
};

export default ModelDetailProduct;

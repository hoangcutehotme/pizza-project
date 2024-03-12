
import axiosInstance from '../../service/axiosInstance';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoadingModal from '../../component/Loading/Loading';
import Table from 'react-bootstrap/esm/Table';
import './style.css'
function ModelDetailOrder({ show, handleClose, order }) {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // console.log(order);
        if (show && order) { // Check if order exists before fetching product details
            const fetchProductDetails = async () => {
                const productRequests = order.cart.map(item => axiosInstance.get(`/api/product/${item.product}`));
                try {
                    const responses = await Promise.all(productRequests);
                    const productDetails = responses.map(response => response.data);
                    setProducts(productDetails);
                } catch (error) {
                    console.error('Error fetching product details:', error);
                }
            };
            fetchProductDetails();
        }
    }, [show, order]);

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title><b>Chi tiết đơn hàng</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Table bordered hover responsive className='mt-3'>
                            <thead>
                                <tr>
                                    <th style={{ width: '50px' }}>STT</th>
                                    <th style={{ width: '100px' }}>Hình ảnh</th>
                                    <th>Tên món</th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><img src={product.images[0]} alt={product.name} style={{ width: '100px', height: '100px' }} /></td>
                                        <td>{product.name}</td>
                                        <td>{order.cart[index]?.quantity || ''}</td>
                                        <td>{product.price || ''}</td>

                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                        <div className='label-order'>
                            <span>Tiền hàng</span>
                            <span>{((order?.totalPrice - order?.shipCost) || '').toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        </div>
                        <div className='label-order'>
                            <span >Tiền ship</span>
                            <span>{((order?.shipCost) || '').toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        </div>
                        <div className='label-order'>
                            <span>Tổng tiền</span>
                            <span>
                                {((order?.totalPrice) || '').toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleEditProduct}>Chỉnh sửa</Button>
                </Modal.Footer> */}
            </Modal>
            {isLoading && (<LoadingModal />)}
        </>
    );
};

export default ModelDetailOrder;


import axiosInstance from '../../service/axiosInstance';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoadingModal from '../../component/Loading/Loading';
import Table from 'react-bootstrap/esm/Table';
import './style.css'
import { getOrderById } from '../../service/orderService';
function ModelDetailOrder({ show, handleClose, id }) {

    const [isLoading, setIsLoading] = useState(false);
    const [orderDetail, setOrderDetail] = useState(null);

    const fetchOrderDetail = async (id) => {
        setIsLoading(true); // Show loading indicator
        try {
            const res = await getOrderById(id);
            if (res && res.data) {
                setOrderDetail(res.data.data);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        } finally {
            setIsLoading(false); // Hide loading indicator
        }
    };

    useEffect(() => {
        if (show && id) {
            fetchOrderDetail(id);
        }
    }, [show, id]);



    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title><b>Chi tiết đơn hàng</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='order-detail'>

                        <div>
                            <h5><b>Thông tin khách hàng</b>

                            </h5>
                            {orderDetail && orderDetail.user && orderDetail.contact && (

                                <div>
                                    <div className='info-user-container'>
                                        <div className='info-item'>
                                            <span className='info-label'>Tên : </span>
                                            <span className='info-value'>{orderDetail.user.lastName + " " + orderDetail.user.firstName}</span>
                                        </div>
                                        <div className='info-item'>
                                            <span className='info-label'>Email : </span>
                                            <span className='info-value'>{orderDetail.user.email}</span>
                                        </div>
                                        <div className='info-item'>
                                            <span className='info-label'>SĐT : </span>
                                            <span className='info-value'>{orderDetail.contact.phoneNumber}</span>
                                        </div>

                                        <div className='info-item'>
                                            <span className='info-label'>Địa chỉ : </span>
                                            <span className='info-value'>{orderDetail.contact.address}</span>
                                        </div>

                                    </div>
                                </div>

                            )}

                        </div>
                        <Table bordered hover responsive className='mt-5 mb-5'>
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
                                {orderDetail && orderDetail.cart && orderDetail.cart.length > 0 &&

                                    orderDetail.cart.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img src={item.product.images[0]} alt={item.product.name} style={{ width: '100px', height: '100px' }} /></td>
                                            <td>{item.product.name}</td>
                                            <td>{item.quantity || ''}</td>
                                            <td>{item.price || ''}</td>

                                        </tr>
                                    ))}
                            </tbody>

                        </Table>

                        <div>
                            <div className='container-price'>
                                <div className='label-order'>
                                    <span className='label-name'>Tiền hàng</span>
                                    <span className='price'>{((orderDetail?.totalPrice - orderDetail?.shipCost) || '').toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                                <div className='label-order'>
                                    <span className='label-name'>Tiền ship</span>
                                    <span className='price'>{((orderDetail?.shipCost) || '').toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                                <div className='label-order'>
                                    <span className='label-name'>Tổng tiền</span>
                                    <span className='price'>
                                        {((orderDetail?.totalPrice) || '').toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </Modal.Body>
            </Modal>
            {isLoading && (<LoadingModal />)}
        </>
    );
};

export default ModelDetailOrder;

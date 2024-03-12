import React, { useEffect, useState } from 'react'
import { getAllOrder } from '../../service/orderService'
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import LoadingModel from '../../component/Loading/Loading'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModelDetailOrder from './ModelDetailOrder';
const ListOrder = () => {

    const [listOrder, setListOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [indexPage, setIndexPage] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [orderDetail, setOrderDetail] = useState(null);
    const [isShowOrder, setIsShowOrder] = useState(false);

    const pageCount = 3;

    useEffect(() => {
        getListOrders();
    }, []);

    const handlePageClick = (event) => {
        setIndexPage(event.selected);
        getListOrders(+event.selected + 1);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    const handleStartDateChange = (date) => {
        console.log("Date ", date);
        getListOrders(indexPage + 1);
        setStartDate(date);
    };

    const handleClose = () => {
        setIsShowOrder(false);
    }

    const handleShowDetailOrder = (order) => {
        setOrderDetail(order);

        console.log("cart", order.cart)
        setIsShowOrder(true);
    }

    function formatDate(date) {
        if (!(date instanceof Date)) return '';

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    function formatDateISO(dateString) {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes} -  ${date.toLocaleDateString('en-GB', options)}`;
    }

    const getListOrders = async (page) => {
        try {

            const param = {
                sort: '-dateOrdered',
                page: page,
                start: formatDate(startDate),
                end: formatDate(endDate)

            }

            console.log("Param", param);

            let res = await getAllOrder(param);

            if (res && res.data) {
                setListOrder(res.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    return (
        <>
            <Container fluid>
                <div style={{ backgroundColor: 'white' }}>
                    <h3>Danh sách đơn hàng</h3>

                    <div className='mt-5 gap-3' style={{ display: 'flex' }}>
                        <div className='gap-2'>
                            <span className='me-2'>Từ ngày</span>
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                selected={startDate}
                                // onSelect={handleDateSelect} //when day is clicked
                                onChange={handleStartDateChange}//only when value has changed
                            /></div>

                        <div className='gap-2'>
                            <span className='me-2' >đến ngày</span>
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                selected={endDate}
                                minDate={startDate}
                                // onSelect={handleDateSelect} //when day is clicked
                                onChange={handleEndDateChange}//only when value has changed
                            /></div>

                    </div>

                    <Table bordered hover responsive className='mt-3'>
                        <thead>
                            <tr>
                                <th style={{ width: '50px' }}>STT</th>
                                <th>Mã đơn hàng</th>
                                <th>Ngày đặt</th>
                                <th>Tiền ship</th>
                                <th>Giá tổng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrder && listOrder.length > 0 && (

                                listOrder.map((order, index) => (
                                    <tr key={`order-${order._id}`} >
                                        <td>{indexPage * 10 + index + 1}</td>
                                        <td>{order._id}</td>
                                        <td>{formatDateISO(order.dateOrdered)}</td>
                                        <td>{order.shipCost.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{order.totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                        <td><button className='btn btn-warning mx-3' onClick={() => handleShowDetailOrder(order)}>Xem</button></td>
                                    </tr>
                                ))
                            )
                            }



                        </tbody>

                    </Table>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='justify-content-right'>
                            <ReactPaginate
                                nextLabel=" > "
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={pageCount}
                                previousLabel=" < "
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>
                </div>


            </Container>
            <ModelDetailOrder show={isShowOrder} handleClose={handleClose} order={orderDetail} />
            {isLoading && (<LoadingModel />)}
        </>
    )
}

export default ListOrder

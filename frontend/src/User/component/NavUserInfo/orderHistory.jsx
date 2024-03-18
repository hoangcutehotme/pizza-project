import React, {useState, useEffect} from "react";
import OrderHistoryItem from "./orderHistoryItem";
import { getOrderByUserId } from "../../service/userService";
import DatePicker from "react-datepicker";
import moment from "moment";
import ModelDetailOrder from "../../../Admin/page/ListOrder/ModelDetailOrder";

const OrderHistory = () => {
    const [items, setItems]  = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [orderDetail, setOrderDetail] = useState(null);
    const [isShowOrder, setIsShowOrder] = useState(false);
    const getOrder = async (start, end) => {
        try {
            const response1 = await getOrderByUserId(formatDate(start), formatDate(end))
            console.log(response1.data.data)
            setItems(response1.data.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        console.log(formatDate(startDate), formatDate(endDate))   
        getOrder(startDate,endDate)
    },[startDate, endDate])
    const handleEndDateChange = async (date) => {
        setEndDate(date);
        // await getListOrders(indexPage + 1);
    };
    const handleStartDateChange = async (date) => {

        setStartDate(date);
        console.log("Start ", formatDate(startDate), "End date", formatDate(endDate));
        // await getListOrders(indexPage + 1);

    };

    const formatDate = (date) => {
        return moment.utc(date).format('DD-MM-YYYY');
    }

    const handleClose = () => {
        setIsShowOrder(false);
    }

    const handleShowDetailOrder = (order) => {
        setOrderDetail(order);
        setIsShowOrder(true);
    }
        
    return (
        <div class="center-2">
            <div class="col-lg-12">
                <h2 class="main-titles">Lịch sử đơn hàng</h2>
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
                <div class="table-history" style={{ padding: '10px' }}>
                    <table>
                        <thead>
                            <tr>
                                <th class="code" style={{ textAlign: 'center', width: '10%' }}>Stt</th>
                                <th class="code" style={{ textAlign: 'center', width: '30%' }}>Mã đơn hàng</th>
                                {/* <th class="code" style={{ textAlign: 'center', width: '10%' }}>Đơn giá</th> */}
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Phí ship</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Tổng tiền</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Ngày mua</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <OrderHistoryItem order={item} index = {index} handleShowDetailOrder={handleShowDetailOrder}/>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModelDetailOrder show={isShowOrder} handleClose={handleClose} id={orderDetail} />
        </div>
    )
}

export default OrderHistory
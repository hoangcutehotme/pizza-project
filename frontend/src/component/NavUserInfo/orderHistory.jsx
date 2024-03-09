import React, {useState, useEffect} from "react";
import OrderHistoryItem from "./orderHistoryItem";
import { getOrderByUserId } from "../../service/userService";

const OrderHistory = () => {
    const [items, setItems]  = useState([])
    useEffect(() => {
        const getOrder = async () => {
            try {
                const response1 = await getOrderByUserId()
                console.log(response1.data.data)
                setItems(response1.data.data)
            } catch (error) {

            }
        }
        getOrder();
    },[])
    return (
        <div class="center-2">
            <div class="col-lg-12">
                <h2 class="main-titles">Lịch sử đơn hàng</h2>
                <div class="table-history" style={{ padding: '10px' }}>
                    <table>
                        <thead>
                            <tr>
                                <th class="code" style={{ textAlign: 'center', width: '50%' }}>Sản Phẩm</th>
                                <th class="code" style={{ textAlign: 'center', width: '10%' }}>Số lượng</th>
                                <th class="code" style={{ textAlign: 'center', width: '10%' }}>Đơn giá</th>
                                <th class="code" style={{ textAlign: 'center', width: '10%' }}>Phí ship</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Tổng tiền</th>
                                <th class="code" style={{ textAlign: 'center', width: '25%' }}>Ngày mua</th>
                                <th class="code" style={{ textAlign: 'center', width: '15%' }}>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <OrderHistoryItem order={item}/>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory
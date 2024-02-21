import React, {useState} from "react";
import NavUserInfo from "../component/NavUserInfo/navUserInfo";
import Info from "../component/NavUserInfo/info";
import ChangePass from "../component/NavUserInfo/changePass";
import Address from "../component/NavUserInfo/address";
import OrderHistory from "../component/NavUserInfo/orderHistory";
const UserInfo = () => {
    const [active, setActive] = useState("info");
    return (
        <div class="master-wrapper-content container jCarousel-overflow-for-button-next-arrow" id="master-container">
            <div
                class="master-column-wrapper custom-master-column-wrapper-min-height"
                id="_master-column-wrapper-id"
                style={{ minHeight: '2px' }}
            >
                <NavUserInfo active={active} setActive={setActive} />
                {active === 'info' && <Info/>}
                {active === 'address' && <Address/>}
                {active === 'orderHistory' && <OrderHistory/>}
                {active === 'changePass' && <ChangePass/>}
            </div>
        </div>
    )
}

export default UserInfo
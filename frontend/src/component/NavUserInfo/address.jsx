import React from "react";
import AddressItem from "./addressItem";

const Address = () => {
    return (
        <div class="center-2">
            <div class="col-lg-12">
                <h2 class="main-titles">Sổ địa chỉ</h2>
                <AddressItem />
                <div class="col-12">
                    <div class="total-wrapper">
                        <button class="btn-next" type="submit" value="Add" name="buttonType">Thêm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
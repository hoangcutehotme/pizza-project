import React from 'react'
import ButtonBorder from '../ButonBorder/buttonBorder';
import './ProductStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ProductItem = ({ img, name, decrip, price }) => {
    return (
        <div class="col-sm-12 col-md-3">
            <div class="Img">
                <img src={img} alt="" />
            </div>
            <div class="Product_item">
                <div class="Name_item">
                    <span>{name}</span>
                </div>
                <div class="describe_item">
                    {decrip}
                </div>
                <div class="Price_item">
                    <div class="price">
                        <h6>
                            Giá chỉ từ
                        </h6>
                        <h4>
                            {price}đ
                        </h4>
                    </div>
                    <ButtonBorder onClick={() => { }} content={(
                        <>
                            <span className='mr-2'> Mua Ngay </span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </>


                    )} />
                </div>
            </div>

        </div>
    )

}

export default ProductItem

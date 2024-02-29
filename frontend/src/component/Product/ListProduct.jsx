import React from 'react'
import pizza1 from '../../assets/imgs/pizza1.png'
import pizza2 from '../../assets/imgs/pizza2.png'
import pizza3 from '../../assets/imgs/pizza3.png'
import pizza4 from '../../assets/imgs/pizza4.png'
import ProductItem from './Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import Itemproduct from '../Itemproduct/Itemproduct'

const listPizza = [
    {
        imgSrc: pizza1,
        name: "Pizza chay",
        description: "Pizza chay ớt chuông, nước sốt đặc biệt",
        price: "90.000",
    },
    {
        imgSrc: pizza2,
        name: "Pizza hải sản Pesto xanh",
        description: "Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh",
        price: "90.000",
    },
    {
        imgSrc: pizza3,
        name: "Pizza tôm cocktail",
        description: "Tôm với nấm, dứa, cà chua và sốt Thousand Island.",
        price: "159.000",
    },
    {
        imgSrc: pizza4,
        name: "Pizza hải sản cao cấp",
        description: "Tôm, cua, mực và nghêu với sốt Marinara",
        price: "159.000",
    }
];

const ListProduct = () => {
    return (
        <div className='container mt-5'>
            <div className='title-group row'>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <h3>Pizza Best Seller</h3>
                    <a href='#'>
                        <span>Xem thêm</span>
                        <FontAwesomeIcon icon={faArrowRight} size='lg' style={{ marginLeft: '5px' }} />
                    </a>
                </div>
            </div>
            <div className='view-temproduct'>
                {listPizza.map(pizza => {
                    return (
                        <Itemproduct />
                    )
                }

                )}

            </div>
        </div>
    )
}

export default ListProduct

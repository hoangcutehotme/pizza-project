import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import Itemproduct from '../Itemproduct/Itemproduct'
import { fetchBestPizza } from '../../service/productService'


const ListProduct = ({ addToCart, setdetail, setitem }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [bestProduct, setBestProduct] = useState([]);

    useEffect(() => {
        getBestProducts();
    }, []);

    const getBestProducts = async () => {
        try {
            let res = await fetchBestPizza();
            if (res && res.data && res.data.data) {
                setBestProduct(res.data.data.data.slice(0, 4));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }


    return (
        <div className='container mt-5' key='list-best-product'>
            <div className='title-group row'>

                <div className="d-flex justify-content-between align-items-center w-100">
                    <h3>Pizza Best Seller</h3>
                    <a href='/pizza'>
                        <span>Xem thêm</span>
                        <FontAwesomeIcon icon={faArrowRight} size='lg' style={{ marginLeft: '5px' }} />
                    </a>
                </div>
            </div>
            <div className='view-best-product' >
                {bestProduct.map(pizza => {
                    return (
                        <Itemproduct key={pizza.name} setdetail={setdetail} addToCart={addToCart} setitem={setitem} product={pizza} />
                    )
                }

                )}

            </div>
        </div>
    )
}

export default ListProduct

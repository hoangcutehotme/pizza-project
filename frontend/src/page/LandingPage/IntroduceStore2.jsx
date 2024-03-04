import React from 'react'
import imageIntroduce from '../../assets/imgs/img-decrip.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './IntroduceStore.css'
import ButtonBorder from '../../component/ButonBorder/buttonBorder'

const IntroduceStore2 = () => {
    return (
        <div className='container mt-5 mb-5'>

            <div className='row'>
                <div className='col-md-6'>
                    <div className='img-introduce'>
                        <img src={imageIntroduce} alt='image introduce' style={{ objectFit: 'cover', width: '100%', height: '100%' }}></img>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='introduce-text'>
                        <div className='row'>
                            <div className='d-flex align-items-end'>
                                <span className='red-pizza-text'>Pizza </span>
                                <span className='green-pizza-text'>Home</span>
                            </div>
                        </div>
                        <>
                            <div className='row p-3 text-introduce'>Nơi bạn có thể thưởng thức những chiếc pizza đặc biệt được chế biến bởi đầu bếp lâu năm với công thức độc quyền. Với sự sáng tạo và đam mê của đầu bếp hàng đầu, mỗi miếng pizza tại chúng tôi đều mang đậm hương vị độc đáo. </div>
                            <div className='row p-3 text-introduce'>Hãy đặt hàng trực tuyến ngay hôm nay để khám phá hương vị độc đáo chỉ có tại Pizza Home!</div>
                        </>

                        <a class="btn btn-danger" href="#" role="button">
                            <span className='mr-2'> Đặt hàng ngay </span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroduceStore2

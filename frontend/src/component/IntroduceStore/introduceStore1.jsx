
import React from 'react'
import { SpecialtyDesc, SpecialtyTitle, Specialties, SpecialtiesSection, SpecialtyColumn, SpecialtyContainer } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faCreditCard, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const introduce = [
    {
        imgSrc: faTruckFast,
        title: "Vận chuyển miễn phí",
        description: "Đơn hàng trên 200,000đ",
    },
    {
        imgSrc: faPizzaSlice,
        title: "Món ăn đa dạng",
        description: "Nhiều sự lựa chọn cùng nhiều ưu đãi",
    },
    {
        imgSrc: faCreditCard,
        title: "Thanh toán nhanh chóng",
        description: "Đảm bảo thanh toán an toàn",
    },

];




const IntroduceStore1 = () => {
    return (
        <>
            <SpecialtiesSection key='section-introduce-store'>
                <Specialties>
                    {
                        introduce.map(x => (
                            <SpecialtyColumn>
                                <SpecialtyContainer>
                                    <FontAwesomeIcon icon={x.imgSrc} size="5x" color='#18AC4E' />
                                    <SpecialtyTitle>{x.title}</SpecialtyTitle>
                                    <SpecialtyDesc>{x.description}</SpecialtyDesc>
                                </SpecialtyContainer>
                            </SpecialtyColumn>
                        ))
                    }
                </Specialties>
            </SpecialtiesSection>
        </>
    );
}

export default IntroduceStore1
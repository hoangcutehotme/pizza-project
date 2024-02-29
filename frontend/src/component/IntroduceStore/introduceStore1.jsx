
import React from 'react'
import truck from '../../assets/imgs/truck.png'
import credit from '../../assets/imgs/credit.png'
import pizza from '../../assets/imgs/pizza-icon.png'
import { SpecialtyDesc, SpecialtyImg, SpecialtyTitle, Specialties, SpecialtiesSection, SpecialtyColumn, SpecialtyContainer } from "./style"

const introduce = [
    {
        imgSrc: truck,
        title: "Vận chuyển miễn phí",
        description: "Đơn hàng trên 200,000đ",
    },
    {
        imgSrc: pizza,
        title: "Món ăn đa dạng",
        description: "Nhiều sự lựa chọn cùng nhiều ưu đãi",
    },
    {
        imgSrc: credit,
        title: "Thanh toán nhanh chóng",
        description: "Đảm bảo thanh toán an toàn",
    },

];



const pizzaData = [
    {
        imgSrc: "...",
        name: "Pizza chay",
        description: "Pizza chay ớt chuông, nước sốt đặc biệt",
        price: "90.000đ",
    },
    {
        imgSrc: "...",
        name: "Pizza hải sản Pesto xanh",
        description: "Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh",
        price: "90.000đ",
    },
    {
        imgSrc: "...",
        name: "Pizza tôm cocktail",
        description: "Tôm với nấm, dứa, cà chua và sốt Thousand Island.",
        price: "159.000đ",
    },
    {
        imgSrc: "...",
        name: "Pizza hải sản cao cấp",
        description: "Tôm, cua, mực và nghêu với sốt Marinara",
        price: "159.000đ",
    }
];



const IntroduceStore1 = () => {
    return (
        <>
            <SpecialtiesSection>
                <Specialties>
                    {
                        introduce.map(x => (
                            <SpecialtyColumn>
                                <SpecialtyContainer>
                                    <SpecialtyImg src={x.imgSrc} />
                                    <SpecialtyTitle>{x.title}</SpecialtyTitle>
                                    <SpecialtyDesc>{x.description}</SpecialtyDesc>
                                </SpecialtyContainer>
                            </SpecialtyColumn>
                        ))
                    }
                </Specialties>
            </SpecialtiesSection>
        </>
    )
}

export default IntroduceStore1
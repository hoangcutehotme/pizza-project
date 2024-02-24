
import React from 'react'
import { Box, Div, Div10, Div11, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Div9, Column, Column2, Column3, Img, Img2, Img3 } from "./introduceStore.js";


const IntroduceStore = () => {
    return (
        <Box>
            <Div>
                <Div2>
                    <Column>
                        <Div3>
                            <Img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fb527f061b13fa600669bacfab2c09bd685d613a8976606bcd2595cab1ce431?"
                            />

                            <Div4>Vận chuyển miễn phí</Div4>
                            <Div5>với đơn hàng trên 200,000đ</Div5>
                        </Div3>
                    </Column>
                    <Column2>
                        <Div6>
                            <Img2
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/33c3383ff2697066ddde61ba13b6f7c94c72d235daaf80fe98e2cbb27174bdd6?"
                            />
                            <Div7>Món ăn đa dạng</Div7>
                            <Div8>Nhiều sự lựa chọn cùng nhiều ưu đãi </Div8>
                        </Div6>
                    </Column2>
                    <Column3>
                        <Div9>
                            <Img3
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4ef3882449ba145d6197635abbd3c5039fa02ef4596e9fe6ad4558e21a18395?"
                            />
                            <Div10>Thanh toán nhanh chóng</Div10>
                            <Div11>Đảm bảo thanh toán an toàn</Div11>
                        </Div9>
                    </Column3>
                </Div2>
            </Div>
        </Box>
    );
}

export default IntroduceStore
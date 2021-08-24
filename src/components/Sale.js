import { Col, Row, Card, Image } from "antd";
import React, { createContext } from 'react';
import { Link } from "react-router-dom";
import "../components/components-css/Sale.scss";



export const DataContext = createContext()
const Sale = () => {
    const ListProduct = [
        {
            id: '1',
            title: 'Áo',
            img: 'sale_off_1.jpg',
            sale: '30',
            name: 'Ao'
        },
        {
            id: '2',
            title: 'Balo',
            img: 'sale_off_2.jpg',
            sale: '10',
            name: 'Balo'
        },
        /*         {
                    id: '3',
                    title: 'Giày',
                    img: 'sale_off_3.jpeg',
                    sale: '20',
                    name: 'Phukien'
                } */
    ]

    return (
        <>
            <Row>
                <div className="card-wrapper">
                    <Col className="left">
                        <Card
                            className="card-sale"
                            bordered={false}
                            back
                        >
                            <Link to="">
                                <div className="img-box">
                                    <Image
                                        className="sale_img"
                                        width={'100%'}
                                        src="https://firebasestorage.googleapis.com/v0/b/fashionshop-c6610.appspot.com/o/slider%2FHome-slider2.png?alt=media&token=194450f8-c3c1-4178-89ac-f4b43a5751b6"
                                        preview={{
                                            visible: false,
                                            /* onVisibleChange: () => { onClick() }, */
                                            mask: <div className="link_product">

                                                <span>
                                                    xem thêm
                                                </span>
                                            </div>
                                        }}
                                    />
                                </div>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="right">
                        <p>
                            <span>M</span>ỗi người đều có cách để hạnh phúc, tích cực riêng. Vì thế AUTUMMN muốn chia sẻ niềm đam mê, tình yêu với những món đồ vintage đến các bạn trong colection lần này.
                            Với những gam màu retro cơ bản, những món đồ vintage, vừa cổ điển lại vừa phóng khoáng. Vẫn biết rằng vintage là những gì thuộc về thời đại cũ, nhưng ở đây AUTUMMN
                             muốn mang đến cảm hứng mới, phù hợp hiện đại mà vẫn giữ nguyên hơi thở hoài cổ.
                            <br />“𝐿𝑖𝑓𝑒 𝑖𝑠 𝑠𝑜 𝑚𝑢𝑐ℎ 𝑏𝑒𝑡𝑡𝑒𝑟 𝑤ℎ𝑒𝑛 𝑦𝑜𝑢’𝑟𝑒 𝑙𝑖𝑣𝑖𝑛𝑔 𝑖𝑛 𝑠𝑙𝑜𝑤 𝑚𝑜𝑡𝑖𝑜𝑛”.
                        </p>
                    </Col>
                </div>

            </Row>
            <Row>
                <div className="card-wrapper direction">
                    <Col className="left">
                        <Card
                            className="card-sale"
                            bordered={false}
                            back
                        >
                            <Link to="">
                                <div className="img-box">
                                    <Image
                                        className="sale_img"
                                        width={'100%'}
                                        src="https://firebasestorage.googleapis.com/v0/b/fashionshop-c6610.appspot.com/o/slider%2FHome-slider1.png?alt=media&token=048ae22f-932b-4836-b447-5510dcb67a8d"
                                        preview={{
                                            visible: false,
                                            /* onVisibleChange: () => { onClick() }, */
                                            mask: <div className="link_product">

                                            <span>
                                                xem thêm
                                            </span>
                                            </div>
                                        }}
                                    />
                                </div>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="right">
                        <p>
                            <span>Đ</span>ược truyền một nguồn cảm hứng tự do và đầy phóng khoáng từ những trải nghiệm tuyệt vời tại thành phố sương mù – Đà Lạt,  một sự giao thoa ngẫu hứng nhưng hoà hợp giữa cả thiên nhiên, con người và thời trang.
                            Không chỉ gói gọn trong các gam màu trung tính lạnh của sương khói, gam màu trung tính nóng hay tone cam đất cũng đều làm bật lên những nét đặc trưng của xứ sở này.
                            Bạn có thể tìm thấy cho mình gần như tất cả những item đang đón đầu xu hướng Thu – Đông 2021, cũng như những chất liệu đủ làm thoả mãn mọi “giác quan” thời trang khó tính nhất trong COLLECTION.
                        </p>
                    </Col>
                </div>

            </Row>
        </>


    );
}

export default Sale;
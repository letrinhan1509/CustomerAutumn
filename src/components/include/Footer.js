import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { Col, Row, Divider } from 'antd';
import "../components-css/Footer.scss"
import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
const iconStyle = {
    color: '#03A9F4',
    fontSize: '40px'
}

const footer = () => {
    return (
        <Footer className="footer" >
            <Row>
                <Col
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 6, offset: 2 }}>
                    <p className="footer-title">Autumn Shop</p>
                    <p>
                        "Chúng tôi đang tạo ra những bộ trang phục sản xuất trong nước hoàn toàn có thể sánh ngang với các thương hiệu thời trang nam đến từ nước ngoài về kiểu dáng, chất lượng lẫn phong cách thời trang."
                    </p>

                </Col>
                <Col
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 6, offset: 2 }}>
                    <p className="footer-title">Theo dõi cửa hàng</p>
                    <p>2021 - Sinh ra để mang tới cho mọi người những điều đẹp đẽ nhất.</p>
                    <p className="social-network">
                        <a href="https://www.facebook.com/Nemo07/"><FacebookOutlined style={iconStyle} /></a>
                        <a href="https://www.instagram.com/ctain_nemo/"><InstagramOutlined style={iconStyle} /></a>
                        <a href="#"><TwitterOutlined style={iconStyle} /></a>
                    </p>
                </Col>
                <Col
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 6, offset: 2 }}>
                    <p className="footer-title">Trụ sở chính </p>
                    <p>FashionShop 180 Đường Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh</p>
                </Col>
            </Row>
            <Row>
                <Col
                    xs={{ span: 5, offset: 1 }}
                    lg={{ span: 6, offset: 2 }}>
                    <p className="footer-title">Bộ sưu tập nổi tiếng </p>
                    <p>Black Summer </p>
                    <p>Hot Autumn </p>
                    <p>man in Vintage </p>
                </Col>
                <Col span={4}
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 6, offset: 2 }}>
                    <p className="footer-title">Thông tin </p>
                    <p>Về cửa hàng </p>
                    <p>Giấy phép </p>
                    <p>Thông tin tuyển dụng </p>
                    <p>Nhân sự </p>
                </Col>
                <Col xs={{ span: 5, offset: 1 }}
                    lg={{ span: 6, offset: 2 }}>
                    <p className="footer-title">Chi nhánh </p>
                    <p>Autumn Q8: 180 Cao Lỗ </p>
                    <p>Autumn Q10: 42 đ. 3 Tháng 2 </p>
                    <p>Autumn Q4: 23 Xóm Chiếu </p>
                    <p>Autumn Q1: 20 Nguyễn Huệ </p>
                </Col>
            </Row>
            <Divider className="driver" />
            <p className="copyRight">© 2021 Ecommerce theme by NemoDev</p>
        </Footer>
    );

};
export default footer;
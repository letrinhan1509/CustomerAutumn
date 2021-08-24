import React, { useState, useEffect } from "react";
import { Row, Col, Card, Tabs, Image, Carousel } from 'antd';
import { Link, useHistory } from "react-router-dom";
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import "./components-css/HomeBestseller.scss";
import cookies from "react-cookies";


const HomeBestseller = (props) => {
    const [ProductHome, setProductHome] = useState(props.ProductHomeS);
    console.log(ProductHome);
    useEffect(() => {
        setProductHome(props.ProductHomeS)
    }, [props.ProductHomeS])
    const handleClick = (productItem) => {
        localStorage.setItem('detail', JSON.stringify(productItem));
    };
    const [hiddenitem] = useState(4);
    //const history = useHistory();
    const history = useHistory();
    useEffect(() => {
        if (!cookies.load('jwt')) {
            history.push('/')
            //window.location.reload()
        }
    })
    return (
        <>
            <div className="menu_filter">
                <h3>Best Seller</h3>
            </div>
            <div className="site-card-wrapper product_home">
                <Row gutter={16} justify="space-around">
                    {ProductHome.slice(0, hiddenitem).map((productItem) => {
                        return (
                            <Col key={productItem.masp} span={6}>
                                <Card
                                    width={'100%'}
                                    key={productItem.masp}
                                    className="card-pro card_product_home"
                                    bordered={false}
                                    hoverable
                                >
                                    <div className="img-box">
                                        <Link onClick={() => handleClick(productItem)} to={`/san-pham/chi-tiet-san-pham/${productItem.masp}`}>
                                            <Image
                                                width={'100%'}
                                                src={productItem.hinh}
                                                preview={{
                                                    visible: false,
                                                    /* onVisibleChange: () => { onClick() }, */
                                                    mask:
                                                        <div className="icon_product">
                                                            {/* <span onClick={() => props.Thongbao_Them(productItem)}>
                                                        <ShoppingCartOutlined
                                                            style={{ fontSize: '36px' }} />
                                                    </span> */}
                                                            {/* <span>
                                                                <Link onClick={() => handleClick(productItem)} to={`/san-pham/chi-tiet-san-pham/${productItem.masp}`}>
                                                                    <EyeOutlined
                                                                        style={{ fontSize: '36px' }}
                                                                    />
                                                                </Link>
                                                            </span> */}
                                                        </div>
                                                }}
                                            />
                                        </Link>
                                    </div>
                                    <Row className="product-price">
                                        <Col>{(productItem.gia).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ</Col>
                                    </Row>
                                    <Row className="product-name">
                                        <Col>{productItem.tensp}</Col>
                                    </Row>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </>
    )
}
export default HomeBestseller;
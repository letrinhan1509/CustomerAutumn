import React, { useState } from "react";
import { Row, Col, Card, Image, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import "container/components-css/ProductType.scss";


const { Meta } = Card;
const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const SearchResult = (props) => {


    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const [visible, setVisible] = useState(8);
    const showMoreProduct = () => {
        setVisible((preValueProduct) => preValueProduct + 4);
    };
    const handleClick = (productItem) => {
        localStorage.setItem('detail', JSON.stringify(productItem));
    };

    console.log(props.b);
    return (
        <>
            <Row className="content-box">
                <Col className="right">
                    <div className="site-card-wrapper product_home">
                        {props.countkqSearch !== 0 ?
                            (
                                <>
                                    <Row className="SearchResult">
                                        <Col>
                                            <p>Kết quả tìm thấy: {props.countkqSearch}</p>
                                        </Col>
                                    </Row>
                                    <Row justify="space-around">
                                        {props.kqSearch.slice(0, visible).map((productItem) => {
                                            return (
                                                <Col key={productItem.masp} style={{ width: 340 }}>
                                                    <Card
                                                        width={'100%'}
                                                        key={productItem.masp}
                                                        className="card-pro card_product_home"
                                                        bordered={false}
                                                        hoverable
                                                    >
                                                        <div className="img-box">
                                                            <Image
                                                                width={'100%'}
                                                                src={productItem.hinh}
                                                                preview={{
                                                                    visible: false,
                                                                    /* onVisibleChange: () => { onClick() }, */
                                                                    mask: <div className="icon_product">
                                                                        <span onClick={() => props.Thongbao_Them(productItem)}>
                                                                            <ShoppingCartOutlined
                                                                                style={{ fontSize: '36px' }} />
                                                                        </span>
                                                                        <span>
                                                                            <Link onClick={() => handleClick(productItem)} to={`/san-pham/chi-tiet-san-pham/${productItem.masp}`}>
                                                                                <EyeOutlined
                                                                                    style={{ fontSize: '36px' }}
                                                                                />
                                                                            </Link>
                                                                        </span>
                                                                    </div>
                                                                }}
                                                            />
                                                        </div>
                                                        <Row className="product-price">
                                                            <Col>{`${productItem.gia} VNĐ`}</Col>
                                                        </Row>
                                                        <Row className="product-name">
                                                            <Col>{productItem.tensp}</Col>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                    <Row className="btn-box">
                                        {
                                            visible < props.kqSearch.length ? (
                                            <Col>
                                                <Button
                                                id="load"
                                                type="primary"
                                                onClick={showMoreProduct}
                                                className="btn-load"
                                                >
                                                Xem thêm
                                                </Button>
                                            </Col>
                                            ) : (<p>Đã hiển thị hết sản phẩm !</p>)
                                        }
                                    </Row>
                                </>
                            )
                            :
                            (
                                <>
                                    <div className="not-found">
                                        <h1>Không tìm thấy kết quả nào giống ý bạn !!!</h1>
                                        <img src="./images/icon/SNF.png" alt="slider" />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default SearchResult;

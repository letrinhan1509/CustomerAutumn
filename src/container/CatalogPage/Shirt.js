import React, { useState, useEffect } from "react";
import { Row, Col, Card, Image, Button, Carousel, Select, Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import "container/components-css/ProductType.scss";
import PRODUCT from 'API_Call/Api_product/product';
import catalog from 'API_Call/Api_catalog/catalog';

const { Option } = Select;
const Shirt = (props) => {
  const [ListProduct, setListProduct] = useState([]);
  const [ListFilter, setListFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cata, setCata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    catalog.getDanhmucID(id).then((res) => {
      if (res.data.status === "Success") {
        setCata(res.data.data);
      }
    });
    //Lấy sản phẩm theo danh mục
    try {
      PRODUCT.getDM(id).then((res) => {
        if (res.data.status === "Success") {
          setListProduct(res.data.data);
          setListFilter(res.data.data);
          setLoading(false);
          setTimeout(() => {
            if (res.data.data !== "") {
              setLoading(true);
            }
          }, 1000);
          console.log(res.data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [id])
  //const ak = props.ListProductHome.filter(ListProductHome => ListProductHome.tendm === "Áo");
  const [visible, setVisible] = useState(8);
  const showMoreProduct = () => {
    setVisible((preValueProduct) => preValueProduct + 4);
  };
  const handleClick = (productItem) => {
    localStorage.setItem('detail', JSON.stringify(productItem));
  };

  const size = [
    {
      key: 1,
      value: 'Mặc định'
    },
    {
      key: 2,
      value: 'S'
    },
    {
      key: 3,
      value: 'M'
    },
    {
      key: 4,
      value: 'L'
    },
    {
      key: 5,
      value: 'XL'
    }
  ];
  const price = [
    {
      key: 1,
      value: 'Mặc định',
      name: 'Mặc định'
    },
    {
      key: 2,
      value: 100000,
      name: '< 100,000đ'
    },
    {
      key: 3,
      value: 200000,
      name: '< 200,000đ'
    },
    {
      key: 4,
      value: 300000,
      name: '< 300,000đ'
    },
    {
      key: 5,
      value: 400000,
      name: '< 400,000đ'
    }
  ];
  const [tempSize, setTempSize] = useState("");
  const [tempPrice, setTempPrice] = useState("");
  function findSize(value) {
    console.log(value);
    if (value === "Mặc định") {
      if (tempPrice !== "") {
        const filPrice = ListProduct.filter(ListProduct => ListProduct.gia <= tempPrice);
        setListFilter(filPrice);
        setTempSize("");
      } else {
        setListFilter(ListProduct);
        setTempSize("");
      }
    } else if (tempPrice !== "") {
      setTempSize(value);
      const filSize = ListProduct.filter(ListProduct => ((JSON.parse(ListProduct.chitiet).find(item => item.size === value)) && ListProduct.gia <= tempPrice));
      setListFilter(filSize);
      console.log(2);
    } else {
      setTempSize(value);
      console.log(ListProduct);
      console.log(JSON.parse(ListProduct[0].chitiet));
      const filSize = ListProduct.filter(ListProduct => (
        JSON.parse(ListProduct.chitiet).find(item => item.size === value)
      ));
      setListFilter(filSize);
      console.log(3);
    }
  }
  function findPrice(value) {
    console.log(value);
    if (value === "Mặc định") {
      if (tempSize !== "") {
        const filPrice = ListProduct.filter(ListProduct => (
          JSON.parse(ListProduct.chitiet).find(item => item.size === tempSize)
        ));
        setListFilter(filPrice);
        setTempPrice("");
      } else {
        setListFilter(ListProduct);
        setTempPrice("");
      }
      console.log(4);
    } else if (tempSize !== "") {
      setTempPrice(value);
      console.log(tempSize);
      const filPrice = ListProduct.filter(ListProduct => (
        JSON.parse(ListProduct.chitiet).find(item => item.size === tempSize) &&  ListProduct.gia <= value
      ));
      console.log(filPrice);
      setListFilter(filPrice);
      console.log(5);
    } else {
      setTempPrice(value);
      const filPrice = ListProduct.filter(ListProduct => (ListProduct.gia <= value));
      setListFilter(filPrice);
      console.log(6);
    }
  }

  return (
    <>
      <Row className="content-box">
        <Col className="right">
          <Carousel dots="" autoplay className="carousel">
            <div>
              <img src={cata.hinh} alt="slider" />
            </div>
          </Carousel>
          <div className="site-card-wrapper product_home">
            <Row className="findPro">
              <Col>
                <h3>Lọc sản phẩm theo SIZE</h3>
                <Select defaultValue="Mặc định" onChange={findSize} style={{ width: 120 }}>
                  {size.map((item) => {
                    return (
                      <>
                        <Option value={item.value}>{item.value}</Option>
                      </>
                    )
                  })}
                </Select>
              </Col>
              <Col>
                <h3>Lọc sản phẩm theo GIÁ</h3>
                <Select defaultValue="Mặc định" onChange={findPrice} style={{ width: 120 }}>
                  {price.map((item) => {
                    return (
                      <>
                        <Option value={item.value}>{item.name}</Option>
                      </>
                    )
                  })}
                </Select>
              </Col>
            </Row>
            {loading === false ? (
              <Row className="spin-wrapper">
                <Spin className="spin" size="large" />
              </Row>
            ) : (
              <>
                <Row justify="space-around">
                  {ListFilter.slice(0, visible).map((productItem) => {
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
                            <Link onClick={() => handleClick(productItem)} to={`/san-pham/chi-tiet-san-pham/${productItem.masp}`}>
                              <Image
                                width={'100%'}
                                src={productItem.hinh}
                                preview={{
                                  visible: false,
                                  /* onVisibleChange: () => { onClick() }, */
                                  mask: <div className="icon_product">
                                    {/* <span onClick={() => props.Thongbao_Them(productItem)}>
                                    <ShoppingCartOutlined
                                      style={{ fontSize: '36px' }} />
                                  </span>
                                  <span>
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
                <Row className="btn-box">
                  {
                    visible < ListProduct.length ? (
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
            )}

          </div>
        </Col>
      </Row>
    </>
  );
};
export default Shirt;
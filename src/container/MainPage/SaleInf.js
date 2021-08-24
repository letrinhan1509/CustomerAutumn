import React, { useEffect, useState } from "react";
import { Row, Col, Spin } from 'antd';
import { TagsOutlined,TagOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import "container/components-css/saleInf.scss";
import cookies from "react-cookies";
import discount from 'API_Call/Api_discount/discount';

const SaleInf = () => {

    const [voucher, setVoucher] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        discount.getAllVoucher().then((res) => {
            setVoucher(res.data.voucher);
            console.log(res.data.voucher);
        })
        setTimeout(() => {
            discount.getAllVoucher().then((res) => {
                setVoucher(res.data.voucher);
                console.log(res.data.voucher);
            })
            if (voucher !== "") {
                setLoading(true);
            }
        }, 1000);
    }, []);


    return (
        <>
            <Row>
                <Col className="title-box"><h1><TagsOutlined /> Voucher hiện có</h1></Col>
                <Col className="sale-wrapper">
                    {
                        loading === false ? (
                            <Row className="spin-wrapper">
                                <Spin className="spin" size="large" />
                            </Row>
                        ) : (
                            voucher.map((item) => {
                                var batdau = new Date(item.ngaybd);
                                var ketthuc = new Date(item.ngaykt);

                                return (
                                    <>
                                        <Row className="sale-box">
                                            <Col className="col-two">
                                                <div className="img-box">
                                                    <img src="https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg?size=626&ext=jpg" alt="khuyenmai" />
                                                </div>
                                                <ul>
                                                    <h3>{item.tenkm} <TagOutlined /></h3>
                                                    <li><span>Mã voucher: </span>{item.voucher}</li>
                                                    <li><span>Nội dung: </span>{item.ghichu}</li>
                                                    <li><span>Thời gian diễn ra: </span>{batdau.toLocaleDateString()} - {ketthuc.toLocaleDateString()}</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </>
                                );
                            })
                        )
                    }

                </Col>
            </Row>
        </>
    )
}
export default SaleInf;


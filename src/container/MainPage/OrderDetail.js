import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Input, Button, message, Select, Table } from 'antd';
import Meta from "antd/lib/card/Meta";
import { useHistory, Link } from "react-router-dom";
import "container/components-css/orderDetail.scss";
import order from 'API_Call/Api_order/order';

const { TextArea } = Input;
const { Option } = Select;

const OrderDetail = () => {
    const orderList = JSON.parse(localStorage.getItem("orderList"));
    const link = useHistory();
    const back = () => {
        localStorage.removeItem("orderList");
    }

    var date = new Date(orderList.ngaydat);

    return (
        <div className="orderDetail">
            <div className="orderDetail-wrapper">
                <Row className="detail-box">
                    <Col className="col-one">
                        <h1>Thông tin đơn hàng</h1>
                        <ul>
                            {/* <li>Mã Khách hàng: {ORDER.makh}</li> */}
                            <li><span>Mã đơn hàng: </span>{orderList.madonhang}</li>
                            <li><span>Tên khách hàng: </span>{orderList.tenkh}</li>
                            <li><span>Điện thoại: </span>{orderList.sodienthoai}</li>
                            <li><span>Email: </span>{orderList.email}</li>
                            <li><span>Địa chỉ: </span>{orderList.diachi}</li>
                            <li><span>Hình thức thanh toán: </span>{orderList.hinhthuc}</li>
                            {orderList.ghichu === "" ? ("") : (<li><span>Ghi chú: </span>{orderList.ghichu}</li>)}
                            {/* {ORDER.makm === null ? ("") : (<li><span>Mã khuyến mãi: </span>{ORDER.makm}</li>)} */}
                            <li><span>Ngày đặt: </span>{date.toLocaleDateString()}</li>
                            <li><span>Phí vận chuyển: </span>{orderList.tienship}</li>
                            <li><span>Tổng hóa đơn: </span>{orderList.tongtien}</li>
                            <li><span>Trạng thái đơn hàng: </span>{orderList.tentt}</li>
                        </ul>
                    </Col>
                    <Col className="col-two">
                        <h3>Chi tiết đơn hàng</h3>
                        <ul>
                            {orderList.chitietDH.map((item) => (
                                <li className="number">
                                    <ul>
                                        <li><span>Tên sản phẩm: </span>{item.tensp}</li>
                                        <li><span>Số lượng: </span>{item.soluong}</li>
                                        <li><span>Giá: </span>{item.gia}Đ</li>
                                        {Number(item.giagiam) === 0 ? ("") : (<li><span>Giảm giá: </span>{item.giagiam}</li>)}
                                        <li><span>Thành tiền: </span>{item.thanhtien}Đ</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                {/* <Row className="btn-box">
                    <Button onClick={back} className="pay" type="primary" size="large">
                        <Link to="/don-hang">Trở về</Link>
                    </Button>
                </Row> */}
            </div>
        </div>
    );
}

export default OrderDetail;

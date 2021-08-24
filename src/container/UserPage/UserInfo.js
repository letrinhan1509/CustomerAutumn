import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image, Input, Button, message, Form, Menu, Spin } from 'antd';
import Menus from "./Menus";
import { useHistory, Link } from "react-router-dom";
import "container/components-css/Form.scss";
import users from 'API_Call/Api_user/user';

const { TextArea } = Input;
const UserInfo = (props) => {
    const history = useHistory();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setUser(JSON.parse(localStorage.getItem("user")));
            if (user !== null) {
                setLoading(true);
            }
        }, 1000);
    }, [])
    var url = window.location.toString();
    url = url.replace("http://localhost:3000/", '');

    return (
        <Container>
            <Row className="col-wrapper">
                <Col className="col-one">
                    <Menus url={url} />
                </Col>
                <Col className="col-two">
                    <Row className="box">
                        <Col className="form">
                            {loading === false ? (
                                <Row className="spin-wrapper">
                                    <Spin className="spin" size="large"/>
                                </Row>
                            ) : (
                                <>
                                    <Row>
                                        <h1 className="user-title">Thông tin tài khoản</h1>
                                        <Col className="img-box">
                                            <Image
                                                src={user.hinh}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="box-inf">
                                        <Col className="label-inf">Tên khách hàng: </Col>
                                        <Col className="inf">{user.tenkh}</Col>
                                    </Row>
                                    <Row className="box-inf">
                                        <Col className="label-inf">Email: </Col>
                                        <Col className="inf">{user.email}</Col>
                                    </Row>
                                    <Row className="box-inf">
                                        <Col className="label-inf">Số điện thoại: </Col>
                                        <Col className="inf">{user.sodienthoai}</Col>
                                    </Row>
                                    <Row className="box-inf">
                                        <Col className="label-inf">Địa chỉ: </Col>
                                        <Col className="inf">{user.diachi}</Col>
                                    </Row>
                                    <Button value="submit" type="primary">
                                        <Link to="/thong-tin-tai-khoan/chinh-sua-thong-tin">Chỉnh sửa</Link>
                                    </Button>
                                </>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default UserInfo;

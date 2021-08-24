import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Image, Input, Button, message, Form, Menu, Spin, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Menus from "./Menus";
import { useHistory, Link } from "react-router-dom";
import "container/components-css/Form.scss";
import users from 'API_Call/Api_user/user';

const { TextArea } = Input;
const ChangePass = (props) => {
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

    //Thông báo action
    const compelete = type => {
        notification[type]({
            message: 'Đổi thành công',
            description:
                'Bạn đã đổi mật khẩu tài khoản thành công !',
        });
    };
    const fail = type => {
        notification[type]({
          message: 'Đổi thất bại',
          description:
            'Đổi mật khẩu tài khoản thất bại, vui lòng đổi lại !',
        });
      };

    const update = (values) => {
        console.log(values)
        users.changePass(values).then((res) => {
            if (res.data.status === "Success") {
                compelete('success');
                //message.success(res.data.message)
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                setTimeout(() => {
                    history.push('/dang-nhap');
                    window.location.reload();
                }, 2000)
            }
            else {
                fail('error');
                //message.error(res.data.message)
            }
        })
            .catch(err => {
                fail('error');
                //message.error(`ERROR !\n ${err.response.data.message}`)
            })
    };

    var url = window.location.toString();
    url = url.replace("http://localhost:3000/", '');
    let pass = "";

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
                                    <Spin className="spin" size="large" />
                                </Row>
                            ) : (
                                <Form
                                    name="update"
                                    onFinish={update}
                                    initialValues={{
                                        email: `${user.email}`,
                                    }}
                                >
                                    <h1 className="user-title">Thay đổi mật khẩu</h1>
                                    <Form.Item
                                        name="email"

                                        label="Email"
                                    >
                                        <Input placeholder="email" disabled />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        label="Mật khẩu cũ"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Bạn chưa nhập mật khẩu cũ!",
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder="Nhập mật khẩu cũ" />
                                    </Form.Item>
                                    <Form.Item
                                        name="newPassword"
                                        id="newPassword"
                                        label="Mật khẩu mới"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Bạn chưa nhập mật khẩu mới!",
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder="Nhập mật khẩu mới" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                                    </Form.Item>
                                    <Form.Item
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        label="Nhập lại mật khẩu mới"
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: "Bạn phải xác nhận mật khẩu!",
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue("newPassword") === value) {
                                                        return Promise.resolve();
                                                    }

                                                    return Promise.reject(
                                                        new Error(
                                                            "Hai mật khẩu phải giống nhau!"
                                                        )
                                                    );
                                                },
                                            }),
                                        ]}

                                    >
                                        <Input.Password placeholder="Nhập lại mật khẩu mới" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                                    </Form.Item>
                                    <Button value="submit" type="primary" htmlType="submit">Cập nhật</Button>
                                </Form>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>


        </Container>

    );
}

export default ChangePass;

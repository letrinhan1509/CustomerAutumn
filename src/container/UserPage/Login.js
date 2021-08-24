import React from 'react';
import axios from "axios";
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useHistory, Link } from "react-router-dom";
import "container/components-css/Form.scss";
import firebase from 'container/Config/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import user from 'API_Call/Api_user/user';
import CART from 'API_Call/API_cart/cart';
//import HeaderPage from '../components/include/HeaderPage';

const tailLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 9,
        },
    },
};
const remember = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: 'http://localhost:3000/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

const Login = (props) => {
    const history = useHistory();

    const login = (values) => {
        console.log(values);
        user
            .login(values)
            .then(async (res) => {
                console.log(res.data);
                if (res.data.status === "LoginSuccess") {
                    message.success(`Xin chào, ${res.data.data.tenkh}`)
                    console.log(res.data.data.username)
                    const cart = JSON.parse(localStorage.getItem("cart"));
                    if (cart !== null) {
                        localStorage.setItem('cart', "[]")
                    }
                    let url = `http://127.0.0.1:5000/api/v1/gio-hang/khach-hang/${res.data.data.makh}`;
                    CART.getByUser(res.data.data.makh).then((res) => {
                        if (res.data.status === "Success") {
                            console.log(res.data.cart);
                            localStorage.setItem('cart', JSON.stringify(res.data.cart))
                        }
                    });
                    props.getToken(res.data.token);
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.data))
                    setTimeout(() => {
                        history.push("/")
                        window.location.reload()
                    }, 2000)
                }
                else {
                    message.error('Login fail !')
                }
            })
            .catch((err) => {
                message.error(`${err.response.data.message}`)
            })
    }

    return (
        <Row className="login-container">
            <Col className="login-form-wrapper">
                <h1 id='register-title' className="register-title">Đăng nhập</h1>
                <Form

                    name="basic"
                    initialValues={{ remember: true }}
                    //initialValues={{ email: `${user.displayName}`,  }} map data usser 
                    onFinish={login}

                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="matkhau"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <div className="btn-wrapper">
                        <Form.Item {...remember} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item {...remember}>
                            <Link to="/dang-nhap/quen-mat-khau"><span>Quân mật khẩu</span><QuestionCircleOutlined /></Link>
                        </Form.Item>
                    </div>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
                <div className="social-network">
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            </Col>
        </Row>
    );
}

export default Login;

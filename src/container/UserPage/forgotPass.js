import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message, notification } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useHistory, Link } from "react-router-dom";
import "container/components-css/Form.scss";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import user from 'API_Call/Api_user/user';
//import HeaderPage from '../components/include/HeaderPage';

const tailLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 7,
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
    signInSuccessUrl: 'https://localhost:3000/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};
const compelete = type => {
    notification[type]({
        message: 'gửi thành công',
        description:
            'Bạn hãy vào email đã yêu cầu để lấy lại mật khẩu mới !',
    });
};
const ForgotPass = () => {
    const history = useHistory();

    const login = (values) => {
        console.log(values);
        user
            .forgotPass(values)
            .then(async (res) => {
                console.log(res.data);
                if (res.data.status === "Success") {
                    compelete('success');
                    setTimeout(() => {
                        history.push("/dang-nhap")
                    }, 1000)
                }
                else {
                    message.error('Login fail !')
                }
            })
            .catch((err) => {
                message.error(`${err.respone.data.message}`)
            })
    }

    return (
        <Row className="login-container">
            <Col className="forgot-form-wrapper">
                <h1 id='register-title' className="register-title">Lấy lại mật khẩu</h1>
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
                    <div className="btn-wrapper">

                    </div>
                    <Form.Item {...tailLayout}>
                        <Button type="dashed" style={{marginRight: 20}}>
                            <Link to="/dang-nhap">Trở lại</Link>
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Gửi yêu cầu
                        </Button>
                    </Form.Item>
                </Form>
                <p><InfoCircleOutlined /> Nhập Email mà bạn đã đăng ký trước đó và nhấn gửi yêu cầu, sau đó bạn vào Email và nhận lại mật khẩu mới.</p>
            </Col>
        </Row>
    );
}

export default ForgotPass;

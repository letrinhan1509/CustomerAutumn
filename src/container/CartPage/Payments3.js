import React, { useState } from "react";
import { Button, Layout, Steps, Row } from "antd";
import { Link } from "react-router-dom";
import { DollarCircleOutlined, RollbackOutlined, FileDoneOutlined, CheckCircleOutlined, FormOutlined } from "@ant-design/icons";
import "container/components-css/payments3.scss"

const { Step } = Steps;
const Payments3 = (props) => {
  const [size, setSize] = useState('large');
  return (
    <>
      <Layout className="container">
        <div className="cart-empty">
          <div>
            <Row className="step">
              <Steps size="small" current={1}>
                <Step status="finish" icon={<FormOutlined />} title="Địa chỉ giao hàng" />
                <Step status="finish" title="Xác nhận và thanh toán" icon={<FileDoneOutlined />} />
                <Step status="finish" title="Hoàn tất đơn hàng" icon={<CheckCircleOutlined />} />
              </Steps>
            </Row>
            <p>Đặt hàng thành công, Autumn chân thành cảm ơn !</p>
            <div>
              <Link to="/">
                <Button type="primary" shape="round" size={size}>
                  Tiếp tục mua hàng
                </Button>
              </Link>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/fashionshop-c6610.appspot.com/o/slider%2FPayment3.jpg?alt=media&token=7e725399-7ed0-4768-9864-baee75c8c9db" alt="empty" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Payments3;

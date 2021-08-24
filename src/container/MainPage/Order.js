import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Input, Button, message, Select, Table, Modal, notification, Spin } from 'antd';
import Meta from "antd/lib/card/Meta";
import { useHistory, Link } from "react-router-dom";
import OrderDetail from "./OrderDetail";
import "container/components-css/order.scss";
import order from 'API_Call/Api_order/order';

const { TextArea } = Input;
const { Option } = Select;
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
const Order = (props) => {
    const link = useHistory();
    const [ListOrder, setListOrder] = useState([]);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    //API Customer order list :
    useEffect(() => {
        order.getUserID(user.makh).then((res) => {
            setListOrder(res.data.data);
            setWordSearch(res.data.data);
            console.log(res.data.data);
            setTimeout(() => {
                if (res.data.data) {
                    setLoading(true);
                }
            }, 1000);
        })
    }, []);
    console.log(ListOrder);


    function removeAccents(str) {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }
    function filterItems(arr, query) {
        return arr.filter(function (el) {
            if (removeAccents(el.code_GHN.toLowerCase()).indexOf(removeAccents(query.toLowerCase())) !== -1) {
                return el;
            } else {
                return "";
            }

        });
    }
    let demo = ListOrder;
    const [wordSearch, setWordSearch] = useState([]);
    function onChange(e) {
        if (e.target.value !== "") {
            let filter = filterItems(ListOrder, e.target.value);
            if (filter !== "") {
                demo = filter;
                setWordSearch(demo);
            } else {
                demo = ListOrder;
                setWordSearch(demo);
            }
        } else {
            demo = ListOrder;
            setWordSearch(demo);
        }
        console.log(demo);
    }
    const [pageSize, setPageSize] = useState(6);
    const size = [
        {
            key: 1,
            PSize: 4,

        },
        {
            key: 2,
            PSize: 6,
        },
        {
            key: 3,
            PSize: 8,
        },
        {
            key: 3,
            PSize: 10,
        }
    ];
    const ChangeSize = (e) => {
        setPageSize(e);
    };


    const [orderList, setOrderList] = useState([]);
    const loadDetail = (e) => {
        let i = e.currentTarget.dataset.id;
        console.log(i);

        order.getOrderID(i).then((res) => {
            if (res.data.status === "Success") {
                console.log(res.data.data);
                localStorage.setItem('orderList', JSON.stringify(res.data.data));
                setVisible(true)
                /* setTimeout(() => {
                    link.push('/don-hang/chi-tiet');
                }, 100) */
            }
        })
    }
    // action 
    const compelete = type => {
        notification[type]({
            message: 'Hủy thành công',
            description:
                'Bạn đã hủy đơn hàng thành công !',
        });
    };
    const cancelOrder = (e) => {
        let i = e.currentTarget.dataset.id;
        console.log(i);
        order.cancelOrder(i).then((res) => {
            if (res.data.status === "Success") {
                compelete("success");
                setLoading(false);
                order.getUserID(user.makh).then((res) => {
                    setListOrder(res.data.data);
                    setWordSearch(res.data.data);
                    console.log(res.data.data);
                    setTimeout(() => {
                        if (res.data.data) {
                            setLoading(true);
                        }
                    }, 1000);
                })
            } else {
                message.error(res.data.message);
            }
        }).catch(err => {
            message.error(`${err.response.data.message}`);
        });
    }

    const columns = [
        {
            title: 'Mã đơn hàng',
            dataIndex: 'madonhang',
            key: 'madonhang',
        },
        {
            title: 'Mã đơn GHN',
            dataIndex: 'code_GHN',
            key: 'code_GHN',
        },
        {
            title: 'Mã khách hàng',
            dataIndex: 'makh',
            key: 'makh',
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'tongtien',
            key: 'tongtien',
        },
        {
            title: 'Mã khuyến mãi',
            dataIndex: 'makm',
            key: 'makm',
        },
        {
            title: 'Ngày đặt',
            dataIndex: 'ngaydat',
            key: 'ngaydat',
            render: ngaydat => {
                var date = new Date(ngaydat);
                return (
                    date.toLocaleDateString()
                );
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'tentt',
            key: 'tentt',
        },
        {
            title: 'Mã nhân viên',
            dataIndex: 'manv',
            key: 'manv',
        },
        {
            dataIndex: "madonhang",
            key: "madonhang",
            render: madonhang => (<Button className="detail-btn" data-id={madonhang} onClick={loadDetail} type="primary">Chi tiết</Button>)
        },
        {
            dataIndex: "madonhang",
            key: "madonhang",
            render: (madonhang, donhang) => (donhang.trangthai === 4 ? ("") : (<Button className="detail-btn" data-id={madonhang} onClick={cancelOrder} type="primary" danger>Hủy đơn hàng</Button>))
        }

    ];

    return (
        <>
            <div className="order">
                <div className="order-wrapper" >
                    <h2 style={{ textAlign: 'center', marginTop: "20px", marginBottom: "20px" }}>DANH SÁCH ĐƠN HÀNG</h2>
                    <div className="View-layout">
                        <div>
                            <span>Đơn hàng hiển thị: </span>
                            <Select defaultValue="6" Option style={{ width: 70 }} onChange={e => ChangeSize(e)}>
                                {size.map((item) => {
                                    return (
                                        <>
                                            <Option value={item.PSize}>{item.PSize}</Option>
                                        </>
                                    )
                                })}
                            </Select>
                        </div>
                        <div className="search-box">
                            <span>Tìm kiếm: </span>
                            <input placeholder='Nhập tên đơn hàng tiết kiệm' style={{ width: 300 }} onChange={e => onChange(e)} />
                        </div>
                    </div>
                    {loading === false ? (
                        <Row className="spin-wrapper">
                            <Spin className="spin" size="large" />
                        </Row>
                    ) : (
                        <Table className="proItem" dataSource={wordSearch} columns={columns} pagination={{ pageSize: `${pageSize}` }} size="middle" />
                    )}
                </div>
            </div>
            <Modal
                centered
                visible={visible}
                //onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1024}
            >
                <OrderDetail />
            </Modal>
        </>
    );
}

export default Order;

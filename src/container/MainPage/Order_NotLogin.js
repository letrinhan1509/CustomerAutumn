import React, { useState } from 'react';
import { Image, Row, Col, Input, Button, message, Select, Table } from 'antd';
import { useHistory, Link } from "react-router-dom";
import "container/components-css/order.scss";
import ORDER from 'API_Call/Api_order/order';

const { TextArea } = Input;
const { Option } = Select;
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
const Order = (props) => {
    const history = useHistory();



    function removeAccents(str) {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }
    function filterItems(arr, query) {
        return arr.filter(function (el) {
            if (removeAccents(el.tennv.toLowerCase()).indexOf(removeAccents(query.toLowerCase())) !== -1) {
                return el;
            } else {
                return "";
            }

        });
    }
    //let demo = ListAdmin;
    const [wordSearch, setWordSearch] = useState([]);
    const [temp, setTemp] = useState("");
    function onChange(e) {
        console.log(e.target.value);
        setTemp(e.target.value);
    }

    const searchOrder = () => {
        console.log(temp);
        ORDER.getOrder_fail(temp).then((res) => {
            if (res.data.status === "Success") {
                message.success(res.data.message);
                console.log(res.data);
                setWordSearch(res.data.data);
            }
        })
            .catch(err => {
                message.error(`Không tìm thấy đơn hàng!\n ${err.response.data.message}`);
            })
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

    const columns = [
        {
            title: 'Mã đơn hàng',
            dataIndex: 'madonhang',
            key: 'madonhang',
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
        },
        {
            title: 'Ngày giao',
            dataIndex: 'ngaygiao',
            key: 'ngaygiao',
        },
        {
            title: 'Mã nhân viên',
            dataIndex: 'manv',
            key: 'manv',
        },

    ];



    return (
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
                        <input placeholder='Nhập số điện thoại của đơn hàng cần tìm' style={{ width: 300 }} onChange={e => onChange(e)} />
                        <Button onClick={searchOrder} type="primary" style={{ width: 50 }}>Tìm</Button>
                    </div>
                </div>
                <Table className="proItem" dataSource={wordSearch} columns={columns} pagination={{ pageSize: `${pageSize}` }} size="middle" />
                {/* <Link to={'/Themnhanvien'}><p className="ant-btn ant-btn-primary" type="primary">Thêm nhân viên</p></Link> */}
            </div>
        </div>
    );
}

export default Order;

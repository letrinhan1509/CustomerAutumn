import React, { useState } from 'react';
import { Menu } from 'antd';
import { EditOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";
import "container/components-css/Form.scss";


const Menus = (props) => {
    const history = useHistory();

    const [current, setCurrent] = useState("thong-tin-tai-khoan");
    const handClick = (e) => {
        history.push(`/${e.key}`);
    }

    return (
        <Menu
            //onClick={handClick}
            selectedKeys={props.url}
        >
            <Menu.Item icon={<ProfileOutlined />}>
            <Link to="/thong-tin-tai-khoan">Thong tin tai khoan</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />}>
                 <Link to="/thong-tin-tai-khoan/chinh-sua-thong-tin">Chỉnh sửa thông tin</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />}>
            <Link to="/thong-tin-tai-khoan/doi-mat-khau">Đổi mật khẩu</Link>
            </Menu.Item>
        </Menu>

    );
}

export default Menus;

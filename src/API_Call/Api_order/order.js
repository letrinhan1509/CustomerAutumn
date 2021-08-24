import AxiosOrder from "./AxiosOrder"

const order = {
    //(Chi tiết 1 đơn hàng theo mã đơn hàng)
    getOrderID: (id) => {
        const url = `/${id}`;
        return AxiosOrder.get(url);
    },
    //(Danh sách chi tiết của 1 đơn hàng theo mã đơn hàng)
    getDetailID: (id) => {
        const url = `/${id}/chi-tiet-dhang`;
        return AxiosOrder.get(url);
    },
    //(Danh sách đơn hàng theo mã khách hàng)
    getUserID: (id) => {
        const url = `/khach-hang/${id}`;
        return AxiosOrder.get(url);
    },
    getOrder_fail: (phone) => {
        const url = `/so-dien-thoai/${phone}`;
        return AxiosOrder.get(url);
    },
    //(Tạo 1 đơn hàng của khách hàng)
    addOrder: (values, token) => {
        const url = "/";
        return AxiosOrder.post(url, values);
    },
    addOrderMomo: (values) => {
        const url = "/pay-momo";
        return AxiosOrder.post(url, values);
    },
    //(Huỷ đơn hàng)
    cancelOrder: (id) => {
        const url = `/${id}`;
        return AxiosOrder.delete(url);
    },
};

export default order;
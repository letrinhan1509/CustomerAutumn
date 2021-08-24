import AxiosCart from "./AxiosCart"

const cart = {
    getAllCart: () => {
        const url = "/";
        return AxiosCart.get(url);
    },
    getCart: (id) => {
        const url = `/${id}`;
        return AxiosCart.get(url);
    },
    //(Giỏ hàng của khách hàng theo makh)
    getByUser: (id) => {
        const url = `/khach-hang/${id}`;
        return AxiosCart.get(url);
    },
    //(Thêm sản phẩm vào giỏ hàng)
    addCart: (values) => {
        const url = "/";
        return AxiosCart.post(url, values);
    },
    updateCart: (values) => {
        const url = "/";
        return AxiosCart.put(url, values);
    },
    //(Xoá giỏ hàng theo mã giỏ hàng)
    deleteCart: (id) => {
        const url = `/${id}`;
        return AxiosCart.delete(url);
    },
};

export default cart;
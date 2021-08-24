import AxiosProduct from "./AxiosProduct"

const product = {
    getAll: () => {
        const url = "/";
        return AxiosProduct.get(url);
    },
    //(Sản phẩm mới)
    getNewProduct: () => {
        const url = "/new-product";
        return AxiosProduct.get(url);
    },
    //(Sản phẩm theo id)
    getid: (id) => {
        const url = `/${id}`;
        return AxiosProduct.get(url);
    },
    //(DSách sản phẩm theo mã loại)
    getLoai: (id) => {
        const url = `/loai/${id}`;
        return AxiosProduct.get(url);
    },
    //(DSách sản phẩm theo mã danh mục)
    getDM: (id) => {
        const url = `/danh-muc/${id}`;
        return AxiosProduct.get(url);
    },
    //(DSách sản phẩm theo mã nhà sản xuất)
    getNSX: (id) => {
        const url = `/nha-san-xuat/${id}`;
        return AxiosProduct.get(url);
    },
    //(check size)
    getChecksize: (values) => {
        const url = `/check-size`;
        return AxiosProduct.post(url, values);
    }
};

export default product;
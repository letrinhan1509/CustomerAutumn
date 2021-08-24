import AxiosDiscount from "./AxiosDiscount"

const discount = {
    getAll: () => {
        const url = "/";
        return AxiosDiscount.get(url);
    },
    //(Danh sách tất cả các khuyến mãi là voucher)
    getAllVoucher: () => {
        const url = "/voucher";
        return AxiosDiscount.get(url);
    },
    //(Danh sách tất cả các khuyến mãi theo sản phẩm)
    getAllProduct: () => {
        const url = "/san-pham";
        return AxiosDiscount.get(url);
    },
    //(Chi tiết của 1 voucher theo mã khuyến mãi)
    getSaleID: (id) => {
        const url = `/${id}`;
        return AxiosDiscount.get(url);
    },
    //(Chi tiết của 1 voucher theo mã voucher)
    getVoucherID: (id) => {
        const url = `/voucher/${id}`;
        return AxiosDiscount.get(url);
    },
};

export default discount;
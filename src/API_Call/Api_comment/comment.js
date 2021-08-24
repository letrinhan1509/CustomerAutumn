import AxiosComment from "./AxiosComment"

const comment = {
    getAll: () => {
        const url = "/";
        return AxiosComment.get(url);
    },
    //(Chi tiết 1 bình luận theo mã bình luận)
    getid: (id) => {
        const url = `/${id}`;
        return AxiosComment.get(url);
    },
    //(Tất cả bình luận theo mã sản phẩm)
    getProductID: (id) => {
        const url = `/san-pham/${id}`;
        return AxiosComment.get(url);
    },
    //(Tất cả bình luận theo mã khách hàng)
    getUserID: (id) => {
        const url = `/khach-hang/${id}`;
        return AxiosComment.get(url);
    },
    //(Tất cả chi tiết bình luận theo mã bình luận)
    getDetailID: (id) => {
        const url = `/${id}/chi-tiet-bluan`;
        return AxiosComment.get(url);
    },
    //(Thêm mới 1 bình luận)
    addComment: (values, token) => {
        const url = "/";
        return AxiosComment.post(url, values, {
            headers: {
                Token: `${token}`,
            },
        });
    },
    //(Trả lời 1 bình luận đã có sẵn)
    replyComment: (values) => {
        const url = "/tra-loi-binh-luan";
        return AxiosComment.post(url, values);
    },
    //(Chỉnh sửa nội dung bình luận theo mã bình luận)
    updateComment: (values, token) => {
        const url = "/";
        return AxiosComment.put(url, values, {
            headers: {
                Token: `${token}`,
            },
        });
    },
    //(Chỉnh sửa nội dung chi tiết(trả lời) bình luận theo mã chitietbl)
    updateDeComment: (values) => {
        const url = "/cap-nhat-tra-loi";
        return AxiosComment.put(url, values);
    },
    //(Cập nhật trạng thái 1 bình luận theo mabl ẩn hoặc hiện)
    hideCommet: (values) => {
        const url = "/cap-nhat-trang-thai";
        return AxiosComment.put(url, values);
    },
    //(Xoá 1 bình luận theo mabl)
    deleteCommentID: (id, token) => {
        const url = `/${id}`;
        return AxiosComment.delete(url, {
            headers: {
                Token: `${token}`,
            },
        });
    },
    //(Xoá 1 chi tiết(trả lời) bình luận theo mã chitietbl)
    deleteCommentDe: (id) => {
        const url = `/xoa-tra-loi/${id}`;
        return AxiosComment.delete(url, id);
    }
};

export default comment;
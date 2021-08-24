import AxiosSize from "./AxiosSize"

const size = {
    getChecksize: (values) => {
        const url = `/check-size`;
        return AxiosSize.post(url, values);
    }
};

export default size;
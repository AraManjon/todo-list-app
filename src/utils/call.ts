import axios, { AxiosResponse } from 'axios';

function call<T>(url: string, options = {}): Promise<AxiosResponse<T>> {
    const { method = 'GET', headers, data }: any = options;

    return axios({
        headers,
        method,
        url,
        data,
    });
}

export default call;
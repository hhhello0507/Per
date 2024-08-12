import axios, {AxiosRequestConfig} from "axios";
import Config from "@/config/config";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
    const baseConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    return axios.create({
        ...baseConfig,
        ...config,
    });
};

export const perAxios = createAxiosInstance({
    baseURL: Config.baseUrl
});

// growAxios.interceptors.response.use((res) => res, errorResponseHandler);
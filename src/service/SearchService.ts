import {perAxios} from "@/service/global/perAxios";
import {ResultModels} from "@/model/ResultModel";

class SearchService {
    async search(prompt: string): Promise<ResultModels> {
        const {data} = await perAxios.get(`google?q=${prompt}`);
        return data;
    }
}

const service = new SearchService();

export default service;
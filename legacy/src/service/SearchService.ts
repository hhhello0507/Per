import {perAxios} from "@/service/global/perAxios";
import {ResultModels} from "@/model/ResultModel";
import {SearchType} from "@/type/SearchType";

class SearchService {
    async search(
        prompt: string,
        type: SearchType,
        lr: string
    ): Promise<ResultModels> {
        const {data} = await perAxios.get(`search`, {
            params: {
                q: prompt,
                type,
                lr
            }
        });
        return data;
    }
}

const service = new SearchService();

export default service;
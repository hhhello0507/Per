import {NextRequest, NextResponse} from "next/server";
import config from "@/config/config";
import axios from "axios";
import ResultModel from "@/model/ResultModel";
import {searchEngineIds, SearchType} from "@/type/SearchType";

export async function GET(
    req: NextRequest
) {
    try {
        const apiKey = config.customSearchApiKey;
        const searchParams = req.nextUrl.searchParams;
        const q = searchParams.get('q') as string;
        const type = searchParams.get('type') as SearchType;
        const lr = searchParams.get('lr') as SearchType;
        const searchEngineId = searchEngineIds[type];
        const response = await axios.get(`https://customsearch.googleapis.com/customsearch/v1`, {
            params: {
                cx: searchEngineId,
                q,
                key: apiKey,
                lr: lr
            }
        });
        return NextResponse.json(response.data.items as Array<ResultModel>);
    } catch (e) {
        console.log(e);
        return NextResponse.json({message: 'server error'}, {status: 500})
    }
}
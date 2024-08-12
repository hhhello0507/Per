import {NextRequest, NextResponse} from "next/server";
import config from "@/config/config";
import axios from "axios";
import ResultModel from "@/model/Result";

export async function GET(
    req: NextRequest
) {
    const searchEngineId = config.searchEngineId;
    const apiKey = config.customSearchApiKey;
    const value = req.nextUrl.searchParams.get('q') as string;
    const response = await axios.get(`https://customsearch.googleapis.com/customsearch/v1?cx=${searchEngineId}&q=${value}&key=${apiKey}`);
    console.log(response.data);
    return NextResponse.json(response.data.items as Array<ResultModel>);
}
import dotenv from "dotenv";
dotenv.config();

const Config = {
    openaiApiKey: process.env.OPENAI_API_KEY,
    customSearchApiKey: process.env.CUSTOM_SEARCH_API_KEY,
    searchEngineId: process.env.SEARCH_ENGINE_ID,
}

export default Config;
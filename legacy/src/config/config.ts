import dotenv from "dotenv";
dotenv.config();

const Config = {
    baseUrl: "http://localhost:3000/api/",
    openaiApiKey: process.env.OPENAI_API_KEY,
    customSearchApiKey: process.env.CUSTOM_SEARCH_API_KEY,
    searchEngineId: {
        all: process.env.ALL_SEARCH_ENGINE_ID,
        github: process.env.GITHUB_SEARCH_ENGINE_ID,
        youtube: process.env.YOUTUBE_SEARCH_ENGINE_ID,
    },
};

export default Config;
import Config from "@/config/config";

class ChatService {
    async chat(prompt: string): Promise<Response> {
        return await fetch(`${Config.baseUrl}chat?q=${prompt}`);
    }
}

const service = new ChatService();

export default service;
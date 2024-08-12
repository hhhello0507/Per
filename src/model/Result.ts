export default interface ResultModel {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    cacheId: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    mime: string;
    fileFormat: string;
    pagemap: any;
    image?: {
        contextLink: string;
        height: number;
        width: number;
        byteSize: number;
        thumbnailLink: string;
        thumbnailHeight: number;
        thumbnailWidth: number;
    };
    labels?: Array<{
        name: string;
        displayName: string;
        label_with_op: string;
    }>;
}

export type ResultModels = Array<ResultModel>;

const ResultMock: ResultModel = {
    cacheId: "",
    displayLink: "",
    fileFormat: "",
    formattedUrl: "velog.io",
    htmlFormattedUrl: "",
    htmlSnippet: "",
    htmlTitle: "",
    kind: "",
    link: "velog.io",
    mime: "",
    pagemap: undefined,
    snippet: "",
    title: "How to custom shadow in Android Compose."
}

const ResultsMock = [
    ResultMock,
    ResultMock,
    ResultMock
]

export {ResultMock, ResultsMock};
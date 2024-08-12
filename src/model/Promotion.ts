interface PromotionModel {
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    bodyLines: Array<{
        title: string;
        htmlTitle: string;
        url: string;
        link: string;
    }>;
    image: {
        source: string;
        width: number;
        height: number;
    };
}

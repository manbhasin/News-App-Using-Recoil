export type Source = {
    id: string,
    name: string
}

export interface NewsModel {
    id: number | string | undefined;
    source?: Source;
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    publishedAt?: string;
    urlToImage?: string;
    content?: string;
}
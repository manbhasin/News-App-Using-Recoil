import {apiService} from "./apiService";
import {v4 as uuid} from 'uuid';
import {NewsModel} from "../models/newsModel";

class NewsService {
    static getInstance(): NewsService {
        return new NewsService();
    }

    async getNews(area: string, pageSize: number): Promise<NewsModel[]> {
        return await apiService.get<any[]>(`everything?q=${area}&pageSize=${pageSize}`).then((res: any) => {
            return res.data.articles.map((article: any) => {
                return {
                    id: uuid(),
                    ...article
                } as NewsModel
            })
        });
    }
}

export const newsService = NewsService.getInstance();
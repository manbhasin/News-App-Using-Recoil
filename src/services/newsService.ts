import {apiService} from "./apiService";
import {v4 as uuid} from 'uuid';
import {NewsModel} from "../models/newsModel";

class NewsService {
    static getInstance(): NewsService {
        return new NewsService();
    }

    async getNews(): Promise<NewsModel[]> {
        return await apiService.get<any[]>('everything?q=technology').then((res: any) => {
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
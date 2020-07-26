import {apiService} from "./apiService";
import {v4 as uuid} from 'uuid';

class NewsService {
    static getInstance(): NewsService {
        return new NewsService();
    }

    async getNews(): Promise<void> {
        return await apiService.get<any[]>('everything?q=technology').then((res: any) => {
            return res.data.articles.map((article: any) => {
                return {
                    id: uuid(),
                    ...article
                }
            })
        });
    }
}

export const newsService = NewsService.getInstance();
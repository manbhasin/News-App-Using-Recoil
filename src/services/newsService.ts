import {apiService} from "./apiService";
import {v4 as uuid} from 'uuid';
import {NewsModel} from "../models/newsModel";

class NewsService {
    static getInstance(): NewsService {
        return new NewsService();
    }

    async getNews(area: string, pageSize: number): Promise<NewsModel[]> {
        let apikey = localStorage.getItem("news_api_key");
        apikey = apikey ? JSON.parse(apikey) : "";
        return await apiService.get<any[]>(`everything?apikey=${apikey}&q=${area}&pageSize=${pageSize}`).then((res: any) => {
            return res.data.articles.map((article: any) => {
                return {
                    id: uuid(),
                    ...article
                } as NewsModel
            })
        })
    }
}

export const newsService = NewsService.getInstance();
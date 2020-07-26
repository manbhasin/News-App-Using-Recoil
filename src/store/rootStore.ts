import {selector} from "recoil";
import {newsService} from "../services/newsService";

export const newsState = selector({
    key: 'NewsState',
    get: async ({get}) => {
        return await newsService.getNews()
    },
});
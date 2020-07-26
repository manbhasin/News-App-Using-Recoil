import {atom, selector} from "recoil";
import {NewsModel} from "../models/newsModel";

const initialNewsState: NewsModel[] = []

export const newsState = atom({
    key: 'NewsState',
    default: initialNewsState
});

export const selectedNewsKey = atom({
    key: 'selectedNewsKey',
    default: "0"
});

export const selectedNews = selector({
    key: 'selectedNews',
    get: ({get}) => {
        const newsList = get(newsState);
        const id = get(selectedNewsKey);

        return newsList.find((item: NewsModel) => item.id === id)
    }
})
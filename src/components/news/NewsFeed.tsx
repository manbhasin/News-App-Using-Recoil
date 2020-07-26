import React, {useEffect, useState} from "react";
import './NewsFeed.scss';
import DashboardContainer from "../dashboard/DashboardContainer"
import {Box, CircularProgress} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {newsState, selectedNewsKey} from "../../store/rootStore";
import {newsService} from "../../services/newsService";
import {NewsModel} from "../../models/newsModel";
import NewsCard from "./news-card/NewsCard";
import NewsDetailModal from "../news-detail-modal/NewsDetailModal";

const NewsFeed: React.FC = () => {
    const [news, setNews] = useRecoilState(newsState);
    const [newsLoading, setNewsLoading] = useState<boolean>(false);
    const [newsKey, setNewsKey] = useRecoilState(selectedNewsKey)

    useEffect(() => {
        const fetchNews = async () => {
            const response: NewsModel[] = await newsService.getNews();
            setNews((prev) => [
                ...prev,
                ...response
            ]);
        }
        fetchNews().then(() => setNewsLoading(false))
    }, []);

    return (
        <DashboardContainer>
            {
                newsLoading ? (
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <CircularProgress/>
                    </div>
                ) : (
                    <Box className={'news-container'}>
                        {news.map((item: NewsModel) => {
                            return (
                                <div key={item.id}>
                                    <NewsCard article={item} onClick={() => setNewsKey(item.id)}/>
                                </div>
                            )
                        })}
                    </Box>
                )
            }
            <NewsDetailModal
                visible={!!(newsKey && newsKey !== "0")}
                onClose={() => setNewsKey("0")}/>
        </DashboardContainer>
    )
};

export default NewsFeed;
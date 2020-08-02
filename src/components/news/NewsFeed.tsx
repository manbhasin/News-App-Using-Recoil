import React, {useEffect, useState} from "react";
import './NewsFeed.scss';
import DashboardContainer from "../dashboard/DashboardContainer"
import {Box, CircularProgress} from "@material-ui/core";
import {useRecoilState, useRecoilValue} from "recoil";
import {
    filterNewsArea,
    filterPageSize,
    newsState,
    openFilterModalState,
    selectedNews,
    selectedNewsKey
} from "../../store/rootStore";
import {newsService} from "../../services/newsService";
import {NewsModel} from "../../models/newsModel";
import NewsCard from "./news-card/NewsCard";
import NewsDetailModal from "../news-detail-modal/NewsDetailModal";
import FilterNewsModal from "../filters-modal/FilterNewsModal";

const NewsFeed: React.FC = () => {
    const [news, setNews] = useRecoilState(newsState);
    const [newsLoading, setNewsLoading] = useState<boolean>(false);
    const [newsKey, setNewsKey] = useRecoilState(selectedNewsKey);
    const [filterModal, setFilterModal] = useRecoilState(openFilterModalState);
    const [area, setArea] = useRecoilState(filterNewsArea)
    const article = useRecoilValue(selectedNews);
    const [pageSize, setPageSize] = useRecoilState(filterPageSize)

    useEffect(() => {
        setNewsLoading(true);
        if (news.length > 0) {
            setNews([])
        }
        const fetchNews = async () => {
            const response: NewsModel[] = await newsService.getNews(area, pageSize);
            setNews(response);
        }
        fetchNews().then(() => setNewsLoading(false))
    }, [area, pageSize]);

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
                selectedArticle={article}
                visible={Boolean(newsKey && newsKey !== "0")}
                onClose={() => setNewsKey("0")}/>
            <FilterNewsModal
                selectedPageSize={pageSize}
                setPageSize={setPageSize}
                selectedArea={area}
                setArea={setArea}
                visible={filterModal}
                onClose={() => setFilterModal(false)}/>
        </DashboardContainer>
    )
};

export default NewsFeed;
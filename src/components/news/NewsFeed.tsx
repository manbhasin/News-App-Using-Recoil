import React from "react";
import './NewsFeed.scss';
import DashboardContainer from "../dashboard/DashboardContainer"
import {Box} from "@material-ui/core";
import {useRecoilValue} from "recoil";
import {newsState} from "../../store/rootStore";
import {NewsModel} from "../../models/newsModel";
import NewsCard from "./news-card/NewsCard";

const NewsFeed: React.FC = () => {
    const news = useRecoilValue(newsState);

    return (
        <DashboardContainer>
            <Box className={'news-container'}>
                {(news as unknown as any[] || []).map((article: NewsModel) => {
                    return (
                        <NewsCard article={article}/>
                    )
                })}
            </Box>
        </DashboardContainer>
    )
};

export default NewsFeed;
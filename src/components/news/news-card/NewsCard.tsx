import React from "react";
import './NewsCard.scss';
import {Box, Card, CardContent, Typography, CardMedia} from '@material-ui/core';
import {NewsModel} from "../../../models/newsModel";

interface NewsCardProps {
    article: NewsModel;
}

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
    return (
        <Box className={'article-card-container'}>
            <Card>
                <CardMedia image={props.article.urlToImage}/>
                <CardContent>
                    <Typography variant={"h3"} color={"secondary"}>{props.article.title}</Typography>
                    <Typography variant={"h5"}>{props.article.source?.name}</Typography>
                    <Typography variant={"h6"}>{props.article.description}</Typography>
                    <Typography variant={"h6"}>{props.article.author}</Typography>
                    <Typography variant={"h6"}>{props.article.content}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default NewsCard;
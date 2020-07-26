import React from "react";
import './NewsCard.scss';
import {Box, Card, CardContent, CardMedia, Tooltip, Typography} from '@material-ui/core';
import {NewsModel} from "../../../models/newsModel";
import {truncateAndEllipsis} from "../../../utils/utils";

interface NewsCardProps {
    article: NewsModel;
    onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
    return (
        <Box className={'article-card-container'} key={props.article.id}>
            <Card style={{height: "100%"}}>
                <CardMedia image={props.article.urlToImage}/>
                <Tooltip placement={"top"} title={<Typography variant={"h5"}>{props.article.title || ""}</Typography>}>
                    <CardContent onClick={props.onClick}
                                 style={{
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "space-between",
                                     height: "40%"
                                 }}>
                        <div>
                            <Typography variant={"h4"}
                                        color={"secondary"}>{truncateAndEllipsis(props.article.title, 20)}</Typography>
                            <Typography variant={"h5"}>Source: {props.article.source?.name}</Typography>
                        </div>
                        <Typography variant={"h6"} align={"right"}>By {truncateAndEllipsis(props.article.author, 40)}</Typography>
                    </CardContent>
                </Tooltip>
            </Card>
        </Box>
    );
};

export default NewsCard;
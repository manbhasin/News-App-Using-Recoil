import React from "react";
import {Dialog, DialogContent, DialogTitle, Link, Typography} from "@material-ui/core";
import {useRecoilValue} from "recoil";
import {selectedNews} from "../../store/rootStore";
import "./NewsModal.scss";

const moment = require("moment");

interface NewsDetailModalProps {
    visible: boolean;
    onClose: () => void;
}

const NewsDetailModal: React.FC<NewsDetailModalProps> = (props: NewsDetailModalProps) => {
    const article = useRecoilValue(selectedNews);

    return (
        <Dialog open={props.visible} onClose={props.onClose}>
            <DialogTitle>
                <Typography variant={"h5"} style={{fontWeight: "bolder"}}>
                    {article?.title || ""}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant={"h5"}>
                    {article?.content?.split("[")[0]}
                    <Link href={article?.url} target="_blank" rel="noopener">
                        Read More
                    </Link>
                </Typography>
                <br/>
                <Typography variant={"h6"}>
                    Source: {article?.source?.name}
                </Typography>
                <Typography variant={"h6"}>
                    Published On: {moment(article?.publishedAt).format("MM/DD/YYYY")}
                </Typography>
                <Typography variant={"h6"}>
                    By: {article?.author}
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default NewsDetailModal
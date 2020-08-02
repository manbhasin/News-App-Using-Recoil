import React from "react";
import {Box, Typography} from "@material-ui/core";

interface ErrorWrapperProps {
    error: any
}


const ErrorWrapper: React.FC<ErrorWrapperProps> = (props: ErrorWrapperProps) => {
    return (
        <Box style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Typography variant={"h5"} style={{fontWeight: "bolder", color: "#fff"}}>
                {props.error?.response?.data?.message || ""}
            </Typography>
        </Box>
    )
}

export default ErrorWrapper
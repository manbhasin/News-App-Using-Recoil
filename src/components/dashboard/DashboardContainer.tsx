import React from "react";
import {Box} from "@material-ui/core";
import Header from "../header/Header";

import "./DashboardContainer.scss"

interface DashboardContainerProps {
    children?: React.ReactElement | React.ReactNode;
}

const DashboardContainer: React.FC<DashboardContainerProps> = (props: DashboardContainerProps) => {
    return (
        <Box className={'dashboard-parent-container'}>
            <Box className={'app-bar'}>
                <Header/>
            </Box>
            <Box className={'route-content'}>
                {props.children}
            </Box>
        </Box>
    );
};

export default DashboardContainer;
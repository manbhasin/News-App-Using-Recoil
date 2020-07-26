import React from "react";
import './Header.scss';
import {Box, Typography} from "@material-ui/core";

const Header: React.FC = () => {
    return (
        <Box className={'app-bar'}>
            <div className={'header-heading'}>
                <Typography variant={"h3"} color={"primary"}>React News App</Typography>
            </div>
        </Box>
    );
};

export default Header;
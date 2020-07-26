import React from "react";
import './Header.scss';
import {Box, Typography} from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';
import {useSetRecoilState} from "recoil";
import {openFilterModalState} from "../../store/rootStore";

const Header: React.FC = () => {
    const handleOpenFilterModal = useSetRecoilState(openFilterModalState)
    return (
        <Box className={'app-bar'}>
            <div/>
            <Typography variant={"h3"} color={"primary"}>React News App Using Recoil.JS</Typography>
            <div className={"filter-btn"} onClick={() => handleOpenFilterModal(true)}>
                <span>FILTERS</span>
                <FilterListIcon htmlColor={"#e0f2f1"}/>
            </div>
        </Box>
    );
};

export default Header;
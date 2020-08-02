import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import {areas, areaSelect, pageNos, pageSelect} from "./constants";

interface FilterNewsModalProps {
    visible: boolean;
    onClose: () => void;
    selectedArea: string;
    setArea: (area: string) => void;
    selectedPageSize: number;
    setPageSize: (pageSize: number) => void;
}

const FilterNewsModal: React.FC<FilterNewsModalProps> = (props: FilterNewsModalProps) => {

    const handleAreaChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setArea(event.target.value as string);
    }

    const handlePageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setPageSize(event.target.value as number);
    }

    return (
        <Dialog open={props.visible} onClose={props.onClose} disableBackdropClick disableEscapeKeyDown>
            <DialogTitle>
                <Typography variant={"h5"} style={{fontWeight: "bolder"}}>
                    Filters
                </Typography>
            </DialogTitle>
            <DialogContent style={{width: 300, display: "flex", justifyContent: "space-between"}}>
                <Select
                    value={props.selectedArea}
                    onChange={handleAreaChange}>
                    {areas.map((area: areaSelect, index: number) => {
                        return (
                            <MenuItem key={index} value={area.value}>{area.label}</MenuItem>
                        )
                    })}
                </Select>
                <Select
                    value={props.selectedPageSize}
                    onChange={handlePageChange}>
                    {pageNos.map((page: pageSelect, index: number) => {
                        return (
                            <MenuItem key={index} value={page.value}>{page.label}</MenuItem>
                        )
                    })}
                </Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default FilterNewsModal;
import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";

interface FilterNewsModalProps {
    visible: boolean;
    onClose: () => void;
}

const FilterNewsModal: React.FC<FilterNewsModalProps> = (props: FilterNewsModalProps) => {
    return (
        <Dialog open={props.visible} onClose={props.onClose} disableBackdropClick disableEscapeKeyDown>
            <DialogTitle>
                <Typography variant={"h5"} style={{fontWeight: "bolder"}}>
                    Filters
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant={"h5"}>
                    Work In Progress
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.onClose} color="primary">
                    Filter
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default FilterNewsModal;
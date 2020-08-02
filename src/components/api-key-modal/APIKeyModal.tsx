import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Link,
    TextField,
    Typography
} from "@material-ui/core";

interface APIKeyModalProps {
    visible: boolean;
    onClose: (apikey: string) => void;
}


const APIKeyModal: React.FC<APIKeyModalProps> = (props: APIKeyModalProps) => {
    const [apikey, setApikey] = React.useState<string>("")
    return (
        <Dialog open={props.visible} onClose={props.onClose} disableBackdropClick disableEscapeKeyDown>
            <DialogTitle>
                <Typography variant={"h5"} style={{fontWeight: "bolder"}}>
                    API Key
                </Typography>
            </DialogTitle>
            <DialogContent style={{width: 500}}>
                <TextField style={{width: "100%"}} label="API Key" onChange={(e) => setApikey(e.target.value)}/>
                <Typography variant={"h6"} style={{color: "#fff", marginTop: 20}}>
                    If you don't have your API Key, you can create one at {" "}
                    <Link href={"https://newsapi.org/"} target="_blank" rel="noopener">News API</Link>
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button disabled={!(apikey.length > 0)} onClick={() => props.onClose(apikey)} color="primary">
                    Set API Key
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default APIKeyModal;
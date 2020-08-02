import React from "react";
import {useLocalStorage} from "../../custom-hooks/useLocalStorage";
import APIKeyModal from "../api-key-modal/APIKeyModal";
import NewsFeed from "../news/NewsFeed";

const APIKeyManager: React.FC = () => {
    const [apikey, setApikey] = useLocalStorage("news_api_key", "");
    return (
        <>
            {apikey.length === 0 && <APIKeyModal visible={true} onClose={(apikey: string) => setApikey(apikey)}/>}
            {apikey.length > 0 && <NewsFeed/>}
        </>
    )
}


export default APIKeyManager;
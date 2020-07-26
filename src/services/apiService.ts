import axios from "axios";

const APIName = 'http://newsapi.org/v2/';
const APIKey = '&apiKey=78ebcadeb72c4050b9f5e3c3914c1058';

class ApiService {
    static getInstance(): ApiService {
        return new ApiService();
    }

    async get<T>(relativePath: string, config?: any): Promise<T> {
        return axios.get(APIName + relativePath + APIKey);
    }
}

export const apiService = ApiService.getInstance();
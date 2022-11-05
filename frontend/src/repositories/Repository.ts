import axios from "axios";

export class Repository {
    private baseUrl: string;
    protected endpoint: string = "/";

    constructor() {
        this.baseUrl = "https://backend.cards.test/api";
    }

    async findAll<Type>() {
        try {
            const {data} = await axios.get<Array<Type>>(this.baseUrl + this.endpoint, {headers: {
                Accept: 'application/json',
            }});
            
            return data;
        } catch (error) {
            console.error(error);
        }
        return [];
    }
}

import { IApi } from "@interfaces/IApi";
import { IData } from "@interfaces/IData";

class ApiService implements IApi {
    getList() {
        return new Promise<IData[]>((resolve, reject) => {
            resolve([
                {
                    name: 'test',
                    id: 1
                },
                {
                    name: 'test2',
                    id: 2
                }
            ]);
        });
    }
}

export default ApiService;
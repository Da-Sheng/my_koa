import { IApi } from "@interfaces/IApi";
import Router from 'koa-router'
import { GET, route } from "awilix-koa";

@route('/api')
class ApiController {
    private apiService: IApi;

    constructor({ apiService }: { apiService: IApi }) {
        this.apiService = apiService;
    }
    @route('/list')
    @GET()
    async getList(ctx: Router.IRouterContext) {
        const data = await this.apiService.getList()
        ctx.body = {
            data
        };
    }
}

export default ApiController;
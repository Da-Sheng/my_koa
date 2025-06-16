import { IData } from "./IData";

export interface IApi {
    getList(): Promise<IData[]>;
}
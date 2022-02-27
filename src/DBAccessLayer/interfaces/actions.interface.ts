import { IObject } from "./obj.interface";

export interface IActions {
    getAll(table: string): any;
    getOneById(table: string, id: number): any;
    create(table: string, obj: IObject): any;
    update(table: string, obj: IObject): any;
    delete(table: string, id: number): any;
}
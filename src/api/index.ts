import { AxiosPromise } from "axios";

export interface getListReqBody {
  limit?: number;
  page?: number;
  id?: number;
}
export abstract class normalApi {
  abstract getItemById(id: string): AxiosPromise<any>;
  abstract getList(params: any): AxiosPromise<any>;
  abstract getCount(params: any): AxiosPromise<any>;
  abstract add(data: any): AxiosPromise<any>;
  abstract update(data: any, id: string): AxiosPromise<any>;
  abstract delete(id: string): AxiosPromise<any>;
}

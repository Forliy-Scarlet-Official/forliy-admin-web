import { AxiosPromise } from "axios";

export interface GetListReqBody {
  limit?: number;
  page?: number;
  id?: number;
}
export interface NormalApi {
  getItemById(id: string): AxiosPromise<any>;
  getList(params: any): AxiosPromise<any>;
  getCount(params: any): AxiosPromise<any>;
  add(data: any): AxiosPromise<any>;
  update(data: any, id: string): AxiosPromise<any>;
  del(id: string): AxiosPromise<any>;
}

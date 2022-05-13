import { get, post } from "@/utils/request";
import { normalApi, getListReqBody } from "@/api/index";

export interface searchColorReqBody extends getListReqBody {
  name?: string;
}
export interface updateColorReqBody {
  name: string;
  a: number;
  r: number;
  g: number;
  b: number;
}
export class Color extends normalApi {
  getItemById = (id: string) => get("/color", {}, { path: id });

  getList = (params: searchColorReqBody) => get("/color/list", params);

  getCount = (params: { id?: number; name: string }) =>
    get("/color/count", params);

  add = (data: updateColorReqBody) => post("/color", data);

  update = (data: updateColorReqBody, id: string) =>
    post("/color/", data, { path: id, type: "put" });

  delete = (id: string) => get("/color/", "", { path: id, type: "delete" });
}

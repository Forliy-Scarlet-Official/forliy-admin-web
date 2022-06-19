import { get, post } from "@/utils/request";
import { NormalApi, GetListReqBody } from "@/api/index";

export interface SearchColorReqBody extends GetListReqBody {
  name?: string;
}
export interface UpdateColorReqBody {
  id?: number;
  name: string;
  a: number;
  r: number;
  g: number;
  b: number;
}

export function useColorResponsitories(): NormalApi {
  const getItemById = (id: string) => get("/color", {}, { path: id });
  const getList = (params: SearchColorReqBody) => get("/color/list", params);
  const getCount = (params: { id?: number; name: string }) =>
    get("/color/count", params);
  const add = (data: UpdateColorReqBody) => post("/color", data);
  const update = (data: UpdateColorReqBody, id: string) =>
    post("/color/", data, { path: id, type: "put" });
  const del = (id: string) => get("/color/", "", { path: id, type: "delete" });

  return {
    getItemById,
    getList,
    getCount,
    add,
    update,
    del,
  };
}

import axios from "axios"

export const get = (url: string, params?: any) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: url,
      params: params,
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export const post = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

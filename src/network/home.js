import {request} from "@/network/index";

export function getHomeMultidate() {
  return request({
    url: 'home/multidata'
  })
}

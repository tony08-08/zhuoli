import axios from "axios";
import { baseURL, TIMEOUT } from "./config";

class ZLRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // this.instance.interceptors.request.use(res => {
    //     return res.data;
    // }, error => {
    //     return Promise.reject(error);
    // });
  }
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default new ZLRequest(baseURL, TIMEOUT);

import axios from "axios";
const URL = "http://192.168.184.13:8000/api/v1";
const instance = axios.create({
  baseURL: URL,
});

export default instance;

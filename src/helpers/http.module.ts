import axios from 'axios';
//axios created because connect to backend  for performing crud oprations
import { baseUrl } from "../constants/url.constants";

const httpModule = axios.create({
    baseURL:baseUrl,
})
export default httpModule;
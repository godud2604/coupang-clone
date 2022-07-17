import axios from 'axios';
import { AxiosOptions } from '../types/http';

export default class Service {
  async axios(options: AxiosOptions) {
    const { data } = await axios({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
      ...options,
    });

    return data;
  }
}

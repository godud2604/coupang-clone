import axios from 'axios';
import cookies from 'js-cookie';
import { AxiosOptions } from '../types/http';

export default class HttpClient {
  async axios(options: AxiosOptions) {
    const { data } = await axios({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
      ...options,
    });

    return data;
  }

  getToken() {
    const refreshToken = cookies.get('refreshToken');
    if (!refreshToken) {
      return;
    }

    return refreshToken;
  }

  setToken(data: any) {
    cookies.set('accessToken', data.access, { expires: 1 });
    cookies.set('refreshToken', data.refresh, { expires: 7 });
  }
}

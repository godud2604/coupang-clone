import axios from 'axios';
import cookies from 'js-cookie';

export default class HttpClient {
  private readonly baseURL = process.env.NEXT_PUBLIC_API_HOST;

  async axios(url: string, options: any) {
    const { data } = await axios({
      url: `${this.baseURL}${url}`,
      ...options,
    });

    if (data.status > 299 || data.status < 200) {
      const message =
        data && data.message ? data.message : 'Something went wrong!';
      throw new Error(message);
    }

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

import axios from 'axios';

type AxiosOptions = {
  method: string;
  url: string;
  headers?: {
    Authorization: string;
  };
  data?: object;
};

export default class Service {
  async axios(options: AxiosOptions) {
    const { data } = await axios({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
      ...options,
    });

    return data;
  }
}

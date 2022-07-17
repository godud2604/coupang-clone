import { getAccessToken } from 'src/utils/token.util';
import Service from './service';

class UserService extends Service {
  constructor() {
    super();
  }

  async me() {
    const accessToken = getAccessToken();
    if (!accessToken) {
      return;
    }

    const data = await super.axios({
      method: 'get',
      url: '/users/me',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  }

  async read(id: number) {
    const data = await super.axios({
      method: 'get',
      url: `/users/${id}`,
    });

    return data;
  }
}

export default new UserService();

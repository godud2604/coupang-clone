import TokenProvider from '@utils/token.util';
import Service from './service';

class UserService extends Service {
  constructor() {
    super();
  }

  async me() {
    if (!TokenProvider.hasExist('access')) {
      return;
    }

    const { data } = await super.axios({
      method: 'get',
      url: '/users/me',
      headers: {
        Authorization: `Bearer ${TokenProvider.get('access')}`,
      },
    });

    return data;
  }

  async read(id: number) {
    const { data } = await super.axios({
      method: 'get',
      url: `/users/${id}`,
    });

    return data;
  }
}

export default new UserService();

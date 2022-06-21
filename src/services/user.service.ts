import HttpClient from '../network/http';

class UserService extends HttpClient {
  constructor() {
    super();
  }

  async me() {
    const data = await super.axios({
      method: 'get',
      url: '/users/me',
      headers: {
        Authorization: `Bearer ${super.getToken()}`,
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

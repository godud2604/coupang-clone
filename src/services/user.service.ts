import HttpClient from '../network/http';

class UserService extends HttpClient {
  async me() {
    const data = await this.axios('/users/me', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    });

    return data;
  }

  async read(id: number) {
    const data = await this.axios(`/users/${id}`, {
      method: 'get',
    });

    return data;
  }
}

export default new UserService();

import { SignupAgreements } from '../types/auth';
import HttpClient from '../network/http';

class AuthService extends HttpClient {
  constructor() {
    super();
  }
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const data = await super.axios({
      method: 'get',
      url: '/auth/refresh',
      headers: {
        Authorization: `Bearer ${super.getToken()}`,
      },
    });

    super.setToken(data);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const data = await super.axios({
      method: 'post',
      url: '/auth/signup',
      data: { email, password, name, phoneNumber, agreements },
    });

    super.setToken(data);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const data = await super.axios({
      method: 'post',
      url: '/auth/login',
      data: { email, password },
    });

    super.setToken(data);
  }
}

export default new AuthService();

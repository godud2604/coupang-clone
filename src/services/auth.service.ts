import HttpClient from '../network/http';

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

export class AuthService extends HttpClient {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const data = await this.axios('/auth/refresh', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    });

    this.setToken(data);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const data = await this.axios('/auth/signup', {
      method: 'post',
      params: { email, password, name, phoneNumber, agreements },
    });

    this.setToken(data);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const data = await this.axios('/auth/login', {
      method: 'post',
      params: { email, password },
    });

    this.setToken(data);
  }
}

export default new AuthService();

import Service from './service';
import { SignupAgreements } from '../types/auth';
import { getRefreshToken, setAuthTokens } from 'src/utils/token.util';

class AuthService extends Service {
  constructor() {
    super();
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      return;
    }

    const data = await super.axios({
      method: 'get',
      url: '/auth/refresh',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    setAuthTokens(data.access, data.refresh);
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

    setAuthTokens(data.acess, data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const data = await super.axios({
      method: 'post',
      url: '/auth/login',
      data: { email, password },
    });

    setAuthTokens(data.access, data.refresh);
  }
}

export default new AuthService();

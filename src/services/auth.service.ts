import TokenProvider from '@utils/token.util';
import Service from './service';

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

class AuthService extends Service {
  constructor() {
    super();
  }

  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    if (!TokenProvider.hasExist('refresh')) return;

    const { data } = await super.axios({
      method: 'get',
      url: '/auth/refresh',
      headers: {
        Authorization: `Bearer ${TokenProvider.get('refresh')}`,
      },
    });

    TokenProvider.set('access', data.access, 1);
    TokenProvider.set('refresh', data.refresh, 7);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await super.axios({
      method: 'post',
      url: '/auth/signup',
      data: { email, password, name, phoneNumber, agreements },
    });

    TokenProvider.set('access', data.access, 1);
    TokenProvider.set('refresh', data.refresh, 7);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await super.axios({
      method: 'post',
      url: '/auth/login',
      data: { email, password },
    });

    TokenProvider.set('access', data.access, 1);
    TokenProvider.set('refresh', data.refresh, 7);
  }
}

export default new AuthService();

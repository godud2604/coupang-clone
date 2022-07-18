import cookies from 'js-cookie';

type TokenType = 'access' | 'refresh';

class TokenProvider {
  static get(tokenType: TokenType) {
    return cookies.get(tokenType);
  }

  static set(tokenType: TokenType, token: string, expires: number) {
    cookies.set(tokenType + 'Token', token, { expires });
  }

  static hasExist(tokenType: TokenType) {
    return !!cookies.get(tokenType);
  }

  static clear() {
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
  }
}

export default TokenProvider;

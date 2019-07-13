import wretch from 'wretch';

export interface IAuthTokens {
  authToken: string;
  refreshToken: string;
}

export class BaseApi {
  public static baseCall() {
    return wretch('https://staging.inshallah.com/');
  }
}

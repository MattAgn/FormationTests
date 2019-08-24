import { BaseApi } from '../';
import { IValidateEmailParams } from './types';
import { EMAIL_API_ENDPOINT } from '../config';

export class SignUpApi {
  public static subscribeNewsletter(subscribeNewsletterParams: IValidateEmailParams) {
    return BaseApi.baseCall()
      .url(EMAIL_API_ENDPOINT)
      .post(subscribeNewsletterParams)
      .res();
  }
}

import { BaseApi } from '../';

import { IValidateEmailParams } from './types';

export class SignUpApi {
  public static subscribeNewsletter(subscribeNewsletterParams: IValidateEmailParams) {
    return BaseApi.baseCall()
      .url('auth/send-validation-email')
      .post(subscribeNewsletterParams)
      .res();
  }
}

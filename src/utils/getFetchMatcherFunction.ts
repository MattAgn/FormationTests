import { MockRequest } from 'fetch-mock';

export const getFetchMatcherFunction = (urlSuffix: string, params: any, authToken?: string) => (
  url: string,
  options: MockRequest
) => {
  let isMatching = 'https://staging.inshallah.com/' + urlSuffix === url;
  if (params) {
    //@ts-ignore
    isMatching = options && !!options.body;
    if (isMatching) {
      //@ts-ignore
      const body = JSON.parse(options.body.toString());
      for (let paramKey of Object.keys(params)) {
        // may not be working with nested objects
        isMatching = isMatching && params[paramKey] === body[paramKey];
      }
    }
  }
  if (authToken && isMatching) {
    isMatching =
      !!options.headers &&
      options.headers.hasOwnProperty('Authorization') &&
      //@ts-ignore
      options.headers['Authorization'] === `bearer ${authToken}`;
  }

  return isMatching;
};

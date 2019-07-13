import { all } from 'redux-saga/effects';

import { subscribeNewsletterWatcher } from './signup/sagas';

export function* watchAll() {
  yield all([subscribeNewsletterWatcher()]);
}

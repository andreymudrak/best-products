import { all } from 'redux-saga/effects';

import orderDashboardSaga from './orderDashboard/saga';

export default function* rootSaga() {
  yield all([orderDashboardSaga()]);
}

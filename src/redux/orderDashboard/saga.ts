import { takeLatest, all, put } from 'redux-saga/effects';
import { orderDashboardsActions } from './actions';

function* ordersReload() {
  yield put(orderDashboardsActions.ordersRefresh([]));
}

export default function* orderDashBoardSaga() {
  yield all([
    takeLatest(orderDashboardsActions.ORDERS_RELOAD, ordersReload),
  ]);
}

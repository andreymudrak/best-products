import { takeLatest, all, put, call } from 'redux-saga/effects';

import { OrderService } from '../../services/OrderService';
import { Response } from '../../services/dto/orders-response.dto';


import { orderDashboardsActions } from './actions';

function* ordersReload(): Generator {

  const result = yield call(OrderService.getOrders);
  yield put(orderDashboardsActions.ordersRefresh([]));
}

export default function* orderDashBoardSaga() {
  yield all([
    takeLatest(orderDashboardsActions.ORDERS_RELOAD, ordersReload),
  ]);
}

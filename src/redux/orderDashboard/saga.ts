import { takeLatest, all, put, call } from 'redux-saga/effects';

import { OrderService } from '../../services/OrderService';
import { OrdersUtils } from '../../utils/OrderUtils';


import { orderDashboardsActions } from './actions';

function* ordersReload(): Generator {

  const result: any = yield call(OrderService.getOrders);
  if (typeof result === null) {
    return;
  }

  const parsedResult = OrdersUtils.perseOrders(result);
  yield put(orderDashboardsActions.ordersRefresh(parsedResult));
}

export default function* orderDashBoardSaga() {
  yield all([
    takeLatest(orderDashboardsActions.ORDERS_RELOAD, ordersReload),
  ]);
}

import { AnyAction } from 'redux';
import { IOrder } from './types';

const TYPES = {
  ORDERS_RELOAD: 'orders-reload',
  ORDERS_REFRESH: 'orders-refresh',
  MONTH_INCREMENT: 'month-increment',
  MONTH_DECREMENT: 'month-decrement',
};

export const orderDashboardsActions = {
  ...TYPES,
  ordersReload: (): AnyAction => ({
    type: TYPES.ORDERS_RELOAD,
  }),
  ordersRefresh: (orders: IOrder[]): AnyAction => ({
    type: TYPES.ORDERS_REFRESH,
    payload: { orders },
  }),
  monthIncrement: (): AnyAction => ({
    type: TYPES.MONTH_INCREMENT,
  }),
  monthDecrement: (): AnyAction => ({
    type: TYPES.MONTH_DECREMENT,
  }),
};

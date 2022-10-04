import { AnyAction } from 'redux';
import { IOrder } from './types';

const TYPES = {
  ORDERS_RELOAD: 'orders-reload',
  ORDERS_REFRESH: 'orders-refresh',
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
};

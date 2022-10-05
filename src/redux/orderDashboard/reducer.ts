import { AnyAction } from 'redux';

import { orderDashboardsActions } from './actions';
import { IState } from './types';

const initState: IState = {
  orders: [],
  selectedDate: {
    year: 2021,
    month: 0,
  }
};


export default function appReducer(state = initState, action: AnyAction) {
  const { type, payload } = action;
  switch (type) {
    case orderDashboardsActions.ORDERS_REFRESH: {
      return {
        ...state,
        orders: payload.orders,
      };
    }
    default: {
      return state;
    }
  }
}

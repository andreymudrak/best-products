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
  switch (action.type) {
    case orderDashboardsActions.ORDERS_RELOAD: {
      return {
        ...state,
        orders: state.orders,
      };
    }
    default: {
      return state;
    }
  }
}

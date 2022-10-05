import { AnyAction } from 'redux';

import { orderDashboardsActions } from './actions';
import { IState } from './types';

const date = new Date();

const initState: IState = {
  orders: [],
  target: 100000,
  date: {
    year: date.getFullYear(),
    month: date.getMonth(),
  }
};


export default function orderDashboardReducer(state = initState, action: AnyAction) {
  const { type, payload } = action;
  switch (type) {
    case orderDashboardsActions.ORDERS_REFRESH: {
      return {
        ...state,
        orders: payload.orders,
      };
    }
    case orderDashboardsActions.MONTH_INCREMENT: {
      if (state.date.month === 11) {
        return {
          ...state,
          date: {
            year: state.date.year + 1,
            month: 0,
          },
        };
      } else {
        return {
          ...state,
          date: {
            year: state.date.year,
            month: state.date.month + 1,
          },
        };
      }
    }
    case orderDashboardsActions.MONTH_DECREMENT: {
      if (state.date.month === 0) {
        return {
          ...state,
          date: {
            year: state.date.year - 1,
            month: 11,
          },
        };
      } else {
        return {
          ...state,
          date: {
            year: state.date.year,
            month: state.date.month - 1,
          },
        };
      }
    }
    default: {
      return state;
    }
  }
}

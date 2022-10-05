import sum from 'lodash/sum';

import { RootState } from '../store';
import { IOrder } from './types';

export const selectDate = ({ orderDashboard }: RootState) => orderDashboard.date;

export const selectSumOfMonth = ({ orderDashboard }: RootState) => {
  const { orders, date } = orderDashboard;

  const volumeArr: number[] = orders.reduce((acc: number[], { orderVolume, orderDate }: IOrder) => {
    const dateArr = orderDate.split('.');
    if ((Number(dateArr[1]) === date.month) && (Number(dateArr[2]) === date.year)) {
      acc.push(orderVolume + 0.01);
    }
    
    return acc;
  } , []);

  return sum(volumeArr);
};

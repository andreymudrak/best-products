import sum from 'lodash/sum';
import orderBy from 'lodash/orderBy';
import maxBy from 'lodash/maxBy';

import { RootState } from '../store';
import { IOrder } from './types';

export const selectDate = ({ orderDashboard }: RootState) => orderDashboard.date;

export const selectSumOfMonth = ({ orderDashboard }: RootState) => {
  const { orders, date } = orderDashboard;

  const volumeArr: number[] = orders.reduce((acc: number[], { orderVolume, orderDate }: IOrder) => {
    const dateArr = orderDate.split('.');
    if ((Number(dateArr[1]) === date.month) && (Number(dateArr[2]) === date.year)) {
      acc.push(orderVolume);
    }
    
    return acc;
  } , []);

  return sum(volumeArr);
};

export const selectRecentOrders = ({ orderDashboard }: RootState) => {
  const { orders, date } = orderDashboard;

  const filteredOrders : IOrder[] = orders.filter((order: IOrder) => {
    const dateArr = order.orderDate.split('.');
    return (Number(dateArr[1]) === date.month) && (Number(dateArr[2]) === date.year);
  });

  const orderedOrders = orderBy(filteredOrders, ['orderDate'], ['desc']).slice(0, 4);

  return orderedOrders;
};

export const selectBestOrders = ({ orderDashboard }: RootState) => {
  const { orders, date } = orderDashboard;

  const filteredOrders : IOrder[] = orders.filter((order: IOrder) => {
    const dateArr = order.orderDate.split('.');
    return (Number(dateArr[1]) === date.month) && (Number(dateArr[2]) === date.year);
  });

  const bestOrders = orderBy(filteredOrders, ['orderVolume'], ['desc']).slice(0, 4);
  const maxValue = maxBy(bestOrders, 'orderVolume')?.orderVolume || 0;
  return { orders: bestOrders, maxValue: maxValue };
};

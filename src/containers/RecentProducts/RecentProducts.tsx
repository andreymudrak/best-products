import React from 'react';
import { useSelector } from 'react-redux';

import { selectRecentOrders } from '../../redux/orderDashboard/selectors';
import { OrdersUtils } from '../../utils/OrderUtils';
import { columns } from './assets';
import { Wrapper } from './RecentProducts.style';

const RecentProducts = () => {
  const orders = useSelector(selectRecentOrders);

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            {columns.map(column => <th key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            return (
              <tr key={order.orderNumber}>
                <td>{order.orderNumber}</td>
                <td>{order.orderDate}</td>
                <td>{order.product}</td>
                <td>{OrdersUtils.convertToEuroCurrency(order.orderVolume)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default RecentProducts;
export { RecentProducts };

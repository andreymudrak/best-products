import React from 'react';
import { useSelector } from 'react-redux';

import { selectBestOrders } from '../../redux/orderDashboard/selectors';
import { OrdersUtils } from '../../utils/OrderUtils';
import { ProgressBar } from '../../components/ProgressBar';
import { Wrapper } from './BestProducts.style';


const BestProducts = () => {
  const { orders, maxValue } = useSelector(selectBestOrders);

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>ORDER VOLUME</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            return (
              <tr key={order.orderNumber}>
                <td>{order.product}</td>
                <td>
                  <ProgressBar
                    currentValue={order.orderVolume}
                    amount={maxValue}
                  />
                </td>
                <td>{OrdersUtils.convertToEuroCurrency(order.orderVolume)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default BestProducts;
export { BestProducts };

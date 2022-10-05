import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { orderDashboardsActions } from '../../redux/orderDashboard/actions';
import { Wrapper } from './OrderDashboard.style';

const OrderDashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderDashboardsActions.ordersReload());
  }, []);

  return (
    <Wrapper>
      Order Dashboard
    </Wrapper>
  );
};

export default OrderDashboard;
export { OrderDashboard };

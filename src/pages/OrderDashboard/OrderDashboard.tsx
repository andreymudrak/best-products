import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { orderDashboardsActions } from '../../redux/orderDashboard/actions';
import { DatePicker } from '../../containers/DatePicker';
import { Wrapper } from './OrderDashboard.style';

const OrderDashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderDashboardsActions.ordersReload());
  }, []);

  return (
    <Wrapper>
      <div className="main-content">
        <DatePicker />
      </div>
      <div className="table-content"></div>
    </Wrapper>
  );
};

export default OrderDashboard;
export { OrderDashboard };

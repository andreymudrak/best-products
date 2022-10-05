import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { orderDashboardsActions } from '../../redux/orderDashboard/actions';
import { selectSumOfMonth } from '../../redux/orderDashboard/selectors';
import { Header } from '../../containers/Header';
import { DatePicker } from '../../containers/DatePicker';
import { Wrapper } from './OrderDashboard.style';

const OrderDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const sumOfMonth = useSelector(selectSumOfMonth);

  useEffect(() => {
    dispatch(orderDashboardsActions.ordersReload());
  }, []);

  return (
    <Wrapper>
      <div className="main-content">
        <Header />
        <DatePicker />
        <div className="amount">
          <span>{sumOfMonth}</span>
        </div>
      </div>
      <div className="table-content"></div>
    </Wrapper>
  );
};

export default OrderDashboard;
export { OrderDashboard };

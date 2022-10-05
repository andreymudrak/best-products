import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TOTAL_AMOUNT } from '../../constants/common';
import { orderDashboardsActions } from '../../redux/orderDashboard/actions';
import { selectSumOfMonth } from '../../redux/orderDashboard/selectors';
import { OrdersUtils } from '../../utils/OrderUtils';

import { Header } from '../../containers/Header';
import { DatePicker } from '../../containers/DatePicker';
import { ProgressBar } from '../../components/ProgressBar';
import { Wrapper } from './OrderDashboard.style';

const OrderDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const sumOfMonth = useSelector(selectSumOfMonth);
  const convertedSum = useMemo(() => OrdersUtils.convertToEuroCurrency(sumOfMonth), [sumOfMonth]);

  useEffect(() => {
    dispatch(orderDashboardsActions.ordersReload());
  }, []);

  return (
    <Wrapper>
      <div className="main-content">
        <Header />
        <DatePicker />
        <div className="amount">
          <span>{convertedSum}</span>
        </div>
        <ProgressBar currentValue={sumOfMonth} amount={TOTAL_AMOUNT} showAmount/>
      </div>
      <div className="table-content"></div>
    </Wrapper>
  );
};

export default OrderDashboard;
export { OrderDashboard };

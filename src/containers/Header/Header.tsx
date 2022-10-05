import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useInterval } from '../../hooks/useInterval';
import { orderDashboardsActions } from '../../redux/orderDashboard/actions';

import { Wrapper } from './Header.style';


const Header = () => {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(60);

  useInterval(() => {
    if (seconds === 0) {
      setSeconds(60);
      dispatch(orderDashboardsActions.ordersReload());
      return;
    }
    setSeconds(seconds - 1);
  }, 1000);

  return (
    <Wrapper>
      <div className='title'>
        <span>Order Dashboard</span>
      </div>
      <div className='refresh'>
        Refresh in&nbsp;
        <span>{seconds.toLocaleString('en-US')}</span>
      </div>
    </Wrapper>
  );
};

export default Header;
export { Header };

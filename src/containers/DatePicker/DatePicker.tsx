import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ArrowButton } from '../../components/ArrowButton';
import { orderDashboardsActions } from '../../redux/orderDashboard/actions';
import { selectDate } from '../../redux/orderDashboard/selectors';
import { monthNames } from './assets';

import { Wrapper } from './DatePicker.style';


const DatePicker = () => {
  const dispatch = useDispatch();
  const { month, year } = useSelector(selectDate);

  const monthDecrement = useCallback(() => {
    dispatch(orderDashboardsActions.monthDecrement());
  }, []);

  const monthIncrement = useCallback(() => {
    dispatch(orderDashboardsActions.monthIncrement());
  }, []);

  return (
    <Wrapper>
      <div className="date">
        <span>{monthNames[month]} </span>
        <span>{year}</span>
      </div>
      <div className="buttons">
        <ArrowButton onClick={monthDecrement} />
        <ArrowButton onClick={monthIncrement} rightArrow />
      </div>
    </Wrapper>
  );
};

export default DatePicker;
export { DatePicker };

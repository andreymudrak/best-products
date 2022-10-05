import React from 'react';

import { Wrapper } from './ProgressBar.style';

interface IProps {
  currentValue: number;
  amount: number;
  showAmount?: boolean
}

const ProgressBar = ({ currentValue = 0, amount = 0, showAmount = false }: IProps) => {

  return (
    <Wrapper showAmount={showAmount} currentValue={currentValue} amount={amount}>
      <div className="progress-bar-container">
        <div className="progress-bar"/>
      </div>
      <div className="amount-container">
        <span>
          {Intl.NumberFormat('de-DE').format(amount)} €
        </span>
        <div className="delimiter" />
      </div>
    </Wrapper>
  );
};

export default ProgressBar;
export { ProgressBar };

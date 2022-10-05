import styled from 'styled-components';

interface WrapperProps {
  readonly currentValue: number;
  readonly amount: number;
  readonly showAmount?: boolean;
}

const getWidth = (currentValue: number, amount: number, showAmount: boolean | undefined): string => {
  const calcAmount = showAmount ? (amount / 0.9) : amount;
  const width = (currentValue / calcAmount) * 100;
  
  return `${width}%`;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  height: ${({ showAmount }) => showAmount ? '162px' : '18px'};
  position: relative;
  margin-top: ${({ showAmount }) => showAmount ? '100px' : '0'};

  .progress-bar-container {
    width: 100%;
    min-height: 18px;
    max-height: 47px;
    background-color: ${({ showAmount, theme }) => showAmount ? theme.colors.grey : 'transparent'};

    .progress-bar {
      height: ${({ showAmount }) => showAmount ? '47px' : '18px'};
      background-color: ${({ theme }) => theme.colors.blue};
      width: ${({ currentValue, amount, showAmount }) => getWidth(currentValue, amount, showAmount)};
    }
  }

  .amount-container {
    display: ${({ showAmount }) => showAmount ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    position: absolute;
    width: 100px;
    top: 0;
    left: calc(90% - 50px);

    .delimiter {
      width: 6px;
      height: 79px;
      margin-top: 16px;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

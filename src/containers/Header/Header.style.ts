import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding: 38px 0 2px 0;
  font-size: 20px;
  letter-spacing: 1px;

  .title {
    font-family: ${({ theme }) => theme.fonts.sourceSerifPro};
  }

  .refresh {
    letter-spacing: 1.1px;
    padding-top: 1px;
    width: 132px;
    span {
      height: 24px;
      font-weight: 700;
      ${({ theme }) => theme.colors.white};
    }
  }
`;

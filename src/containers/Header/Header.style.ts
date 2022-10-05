import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding-top: 36px;
  font-size: 20px;
  letter-spacing: 1px;

  .title {
    font-family: ${({ theme }) => theme.fonts.sourceSerifPro};
  }

  .refresh {
    letter-spacing: 0.1px;
    padding-top: 1px;
    width: 134px;

    span {
      height: 24px;
      font-weight: 700;
      ${({ theme }) => theme.colors.white};
    }
  }
`;

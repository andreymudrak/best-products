import styled from 'styled-components';

export const Wrapper = styled.div`
  .main-content {
    padding: 40px 36px;
    height: 725px;

    .amount {
      margin: 160px 0 0 0;
      font-size: 192px;
      font-weight: 700px;
      letter-spacing: 3.6px;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fonts.roboto};
    }
  }
`;

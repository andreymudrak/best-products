import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 22px 34px 35px 36px;
  width: 100%;
  min-height: 220px;

  table {
    border-collapse: collapse;
    width: 100%;

    thead {
      font-family: ${({ theme }) => theme.fonts.sourceSerifPro};
      font-weight: 400;
      font-size: 20px;
      color: ${({ theme }) => theme.fonts.whiteGrey};
      height: 30px;
      border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
    }

    thead, tbody {
      width: 100%;

      tr {
        text-align: left;

        td {
          padding-top: 18px;
          font-size: 20px;
          font-weight: 500;
        }

        & :first-child {
          width: 12%;
        }

        & :nth-child(2) {
          width: 19%;
        }
        & :nth-child(3) {
          width: 40%;
        }
        & :nth-child(4) {
          width: 25%;
          text-align: right;
          font-weight: 700;
        }
      }
    }
  }
`;

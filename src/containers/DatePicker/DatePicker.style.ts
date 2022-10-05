import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  
  width: 432px;

  .date {
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
  }

  .buttons {
    display: flex;

    button + button {
      margin-left: 9px;
    }
  }


`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  max-width: 432px;

  .date {
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 0.8px;
  }

  .buttons {
    display: flex;

    button + button {
      margin-left: 9px;
    }
  }


`;

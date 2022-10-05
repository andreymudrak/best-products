import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 53px;
  height: 53px;

  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

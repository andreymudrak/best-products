import styled from 'styled-components';
import { publicImagesURL } from '../../config';

const Circle = `${publicImagesURL}/images/circles.png`;

export const Wrapper = styled.div`
  width: 100%;
  background-image: url(${Circle});
  background-size: 42.1%;
  background-position: 100% 0%;
  background-repeat: no-repeat;

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

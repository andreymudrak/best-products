import React from 'react';

import { IconLeft, IconRight } from '../../lib/icons';
import { Wrapper } from './ArrowButton.style';

interface IProps {
  rightArrow?: boolean;
  onClick: () => void;
}

const ArrowButton = ({ rightArrow, onClick }: IProps) => {

  return (
    <Wrapper onClick={onClick}>
      {rightArrow ? <IconRight /> : <IconLeft />}
    </Wrapper>
  );
};

export default ArrowButton;
export { ArrowButton };

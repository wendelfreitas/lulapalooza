import React from 'react';
import * as S from './styles';

export type BoxProps = {
  color: string;
  size: string;
  children: React.ReactNode;
};

export const Box = ({ size, color, children, ...props }: BoxProps) => {
  return (
    <S.Container size={size} color={color} {...props}>
      {children}
    </S.Container>
  );
};

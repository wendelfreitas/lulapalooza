import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  title?: string;
  link?: string;
  color?: 'white' | 'black';
};

export const Button = ({
  title = 'Hello Appetizer',
  link,
  color = 'white',
}: ButtonProps) => {
  return (
    <S.Container onClick={() => window.open(link, '__blank')} color={color}>
      <b>{title}</b>
    </S.Container>
  );
};

import React from 'react';
import Lulapalooza from '../../../public/images/lulapalooza.png';
import * as S from './styles';

export const Logo = () => {
  return (
    <S.Image src={Lulapalooza} alt='Lulapalooza' width={220} height={80} />
  );
};

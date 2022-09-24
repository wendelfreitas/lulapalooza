import { Logo } from '../../components/Logo';
import React from 'react';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <div>
        <Logo />
        <p>OCT 1-2, 2022 • CHACÁRA • BAURU, SP</p>
      </div>
    </S.Container>
  );
};

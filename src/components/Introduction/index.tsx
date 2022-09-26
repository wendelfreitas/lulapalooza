import React from 'react';
import * as animationData from '../../../public/lulapalooza.json';

import Lottie from 'react-lottie';

import * as S from './styles';
import Image from 'next/image';

export const Introduction = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section>
      <S.Container>
        <div>
          <Lottie options={defaultOptions} />
          <S.LogoContainer>
            <img src='/images/lulapalooza.png' />
          </S.LogoContainer>
        </div>
      </S.Container>
    </section>
  );
};

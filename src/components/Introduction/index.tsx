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
            <Image src='/images/lulapalooza.png' width={750} height={230} />
          </S.LogoContainer>
        </div>
      </S.Container>
    </section>
  );
};

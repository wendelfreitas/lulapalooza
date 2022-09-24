import React from 'react';
import * as S from './styles';

export type CardLinkProps = {
  title?: string;
  href?: string;
};

const icon =
  'https://assets-global.website-files.com/5e927ba01e4ad56ae5465eb8/628f7b3f02347530872a6917_Arrow.svg';

export const CardLink = ({ title = 'GETTING HERE', href }: CardLinkProps) => {
  return (
    <S.Container onClick={() => window.open(href, '__blank')}>
      <b>{title}</b>
      <img src={icon} alt='Arrow Icon' />
    </S.Container>
  );
};

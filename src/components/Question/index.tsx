import React from 'react';
import * as S from './styles';

export type QuestionProps = {
  title?: string;
};

export const Question = ({ title = 'Questions?' }: QuestionProps) => {
  return <S.Container>{title}</S.Container>;
};

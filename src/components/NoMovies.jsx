import React from 'react';
import styled from 'styled-components';
import noMoviesIconSrc from '../images/no-movies-icon.svg';

const NoMoviesWrapper = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 100px;
  width: 100%;
`;

const NoMoviesIcon = styled.img.attrs(({ src }) => ({
  src: src
}))`
  height: 200px;
  opacity: 0.2;
`;

const NoMovies = () => {
  return (
    <NoMoviesWrapper>
      <NoMoviesIcon src={noMoviesIconSrc} />
    </NoMoviesWrapper>
  );
};

export default NoMovies;

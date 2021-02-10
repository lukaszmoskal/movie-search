import React from 'react';
import styled from 'styled-components';
import noPoster from '../images/no-poster.jpg';

const MovieWrapper = styled.div`
  display: block;
  margin: 15px auto;
  max-width: 300px;
  padding: 15px;
  text-align: center;
`;

const MoviePoster = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt
}))`
  margin: auto;
  max-height: 400px;
`;

const Movie = ({ imgSrc, title, year }) => {
  return (
    <MovieWrapper>
      <MoviePoster src={imgSrc !== 'N/A' ? imgSrc : noPoster} alt={title} />
      <h3>{title}</h3>
      <p>{year}</p>
    </MovieWrapper>
  );
};

export default Movie;

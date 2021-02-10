import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import NoMovies from './NoMovies';

const MoviesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  margin: auto;
  max-width: 1600px;
  padding: 100px 30px;
  width: 100%;

  @media (max-width: 640px) {
    padding: 100px 15px;
  }
`;

const MoviesList = ({ movies }) => {
  return (
    <MoviesListWrapper>
      {movies ? (
        movies.map(movie => (
          <Movie
            key={movie.imdbID}
            imgSrc={movie.Poster}
            title={movie.Title}
            alt={movie.Title}
            year={movie.Year}
          />
        ))
      ) : (
        <NoMovies />
      )}
    </MoviesListWrapper>
  );
};

export default MoviesList;

import { useState, useEffect } from 'react';
import GlobalStyle from './styles/globalStyle';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Search from './components/Search';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const getMovies = async movie => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`;

    const moviesResponse = await fetch(url)
      .then(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      });

    setMovies(moviesResponse.Search);
  };

  const handleSearchItem = e => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    getMovies(searchItem);
  }, [searchItem]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar>
        <Logo />
        <Search
          onChange={handleSearchItem}
          placeholder='Search...'
          value={searchItem}
        />
      </Navbar>
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;

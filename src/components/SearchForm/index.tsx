import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GlobalContainer } from '~src/globals';
import { InputEventType } from '~src/types';
import { Container, SearchContainer, SearchHeading } from './style';

const SearchForm = () => {
  const [movieName, setMovieName] = useState('');

  const handleChange = (e: InputEventType) => {
    const { value } = e.target;
    console.log(value);
    setMovieName(value);
  };

  return (
    <Container aria-label="search for movies">
      <GlobalContainer>
        <SearchHeading element="h2">Search</SearchHeading>
        <SearchContainer>
          <FaSearch className="search__icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a movie"
            value={movieName}
            onChange={handleChange}
          />
        </SearchContainer>
      </GlobalContainer>
    </Container>
  );
};

export { SearchForm };

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GlobalContainer } from '~src/globals';
import { InputEventType } from '~src/types';
import { Container, SearchContainer } from './style';

const SearchForm = () => {
  const [country, setCountry] = useState('');

  const handleChange = (e: InputEventType) => {
    const { value } = e.target;
    console.log(value);
    setCountry(value);
  };

  return (
    <Container>
      <GlobalContainer>
        <SearchContainer>
          <FaSearch className="search__icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a movie"
            value={country}
            onChange={handleChange}
          />
        </SearchContainer>
      </GlobalContainer>
    </Container>
  );
};

export { SearchForm };

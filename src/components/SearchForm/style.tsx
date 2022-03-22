import styled from 'styled-components';
import { Text } from '../Text';

const Container = styled.section`
  margin-block: 2rem;

  h2 {
    font-size: var(--fs-600);
  }
`;

const SearchContainer = styled.form`
  display: grid;
  grid-template-columns: 2rem 1fr;
  align-items: center;
  margin-block: 1rem;
  padding-block: 1.5rem;
  padding-inline: 2rem;
  border: 1px solid hsl(var(--clr-400));
  border-radius: 0.6rem;
  overflow: hidden;

  ::placeholder {
    font-size: var(--fs-400);
  }

  .search__icon {
    font: inherit;
    grid-column: 1 / 2;
    z-index: 2;
  }

  input {
    grid-column: 2 / -1;
    margin-left: 1rem;
    border: 0;
    background-color: transparent;
    outline: none;

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    .search__icon {
      display: none;
    }
    input {
      grid-column: 1 / -1;
    }
    ::placeholder {
      color: transparent;
    }
  }
`;

const SearchHeading = styled(Text)``;

export { Container, SearchContainer, SearchHeading };

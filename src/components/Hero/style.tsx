import styled from 'styled-components';
import { Text } from '../Text';

const Container = styled.div`
  padding-block: 2rem;
  min-height: 60vmin;
  color: var(--clr-header);
  background-image: url('/assets/header.svg');
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: var(--fs-700);
    font-weight: var(--fw-700);

    @media (max-width: 35em) {
      text-align: center;
    }
  }
`;

const HeroText = styled(Text)``;

export { Container, HeroText };

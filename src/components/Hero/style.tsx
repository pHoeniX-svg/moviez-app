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
    font-size: var(--fs-900);
    font-weight: var(--fw-700);

    @media (max-width: 45em) {
      text-align: center;
    }
    @media (max-width: 35em) {
      font-size: 2.8rem;
    }
  }
`;

const HeroText = styled(Text)``;

export { Container, HeroText };

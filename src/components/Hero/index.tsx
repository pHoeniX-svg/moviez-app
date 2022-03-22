import { GlobalContainer } from '~src/globals';
import { Container, HeroText } from './style';

const Hero = () => {
  return (
    <Container as="section" aria-labelledby="hero-heading">
      <GlobalContainer>
        <HeroText element="h1" id="hero-heading">
          Watch something incredible.
        </HeroText>
      </GlobalContainer>
    </Container>
  );
};

export { Hero };

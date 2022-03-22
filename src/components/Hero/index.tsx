import { GlobalContainer } from '~src/globals';
import { Container, HeroText } from './style';

const Hero = () => {
  return (
    <Container as="section">
      <GlobalContainer>
        <HeroText element="h1">Get the movies you deserve</HeroText>
      </GlobalContainer>
    </Container>
  );
};

export { Hero };

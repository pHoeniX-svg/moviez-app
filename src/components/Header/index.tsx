import { GlobalContainer } from '~src/globals';
import { Container, HeaderText } from './style';

const Header = () => {
  return (
    <Container>
      <GlobalContainer>
        <HeaderText element="p">Moviez App</HeaderText>
      </GlobalContainer>
    </Container>
  );
};

export { Header };

import styled from 'styled-components';
import { Text } from '../Text';

const Container = styled.header`
  padding-block: 2.5rem;
  background: var(--bg-header);

  p {
    color: var(--clr-header);
    font-weight: var(--fw-400);
    font-size: var(--fs-600);

    @media (max-width: 45em) {
      text-align: center;
    }
  }
`;

const HeaderText = styled(Text)``;

export { Container, HeaderText };

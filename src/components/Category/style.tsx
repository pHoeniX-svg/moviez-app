import styled from 'styled-components';

const Container = styled.section``;
const CategoryHeader = styled.h2``;

const CategoryList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    scrollbar-width: 0;
  }

  & > * {
    flex: 1;
  }
`;

const CategoryCard = styled.article`
  position: relative;

  img {
    position: relative;
    width: 100%;
    max-height: 30rem;
    transition: tranform 450ms;
    cursor: pointer;
    object-fit: cover;
    z-index: 1;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    color: var(--clr-accent);
  }
`;

export { Container, CategoryHeader, CategoryCard, CategoryList };

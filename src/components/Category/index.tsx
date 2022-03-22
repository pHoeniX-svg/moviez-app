import { GlobalContainer } from '~src/globals';
import { Text } from '../Text';
import { CategoryCard, CategoryHeader, CategoryList, Container } from './style';

const Category = () => {
  return (
    <Container aria-label="movie category">
      <GlobalContainer>
        <CategoryHeader>Some Text</CategoryHeader>
        {/* Cards */}

        <CategoryList>
          <CategoryCard key="1">
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard key="2">
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard key="3">
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
          <CategoryCard>
            <img src="/assets/category.svg" alt="category" />
            <Text element="p">Movie Name</Text>
          </CategoryCard>
        </CategoryList>
      </GlobalContainer>
    </Container>
  );
};

export { Category };
